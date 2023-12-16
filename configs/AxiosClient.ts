import axios from 'axios';
import Cookies from 'js-cookie';

import { handleSignOut } from '@/utils';
import {URLEnum} from "@/constants";

let refreshTokenRequest: undefined | string = undefined;
const updateRefreshToken = async () => {
  const refreshToken = Cookies.get('refreshToken');
  try {
    const res = await axios.post<{
      data: { result: { accessToken: string } };
    }>(URLEnum.REFRESH, undefined, {
      baseURL: process.env.NEXT_PUBLIC_WAP_ENDPOINT,
      headers: {
        'Content-Type': 'application/json',
        ...(refreshToken && { Authorization: `Bearer ${refreshToken}` }),
      },
    });

    return res.data.data.result.accessToken;
  } catch (err) {
    handleSignOut();
  }
};

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WAP_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.request.use(
  async (value) => {
    const accessToken = Cookies.get('accessToken');
    if (accessToken) {
      value.headers.set('Authorization', `Bearer ${accessToken}`);
    }

    return value;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalConfig = error.config;
    if (error.response.status === 401) {
      if (!Cookies.get('refreshToken')) {
        handleSignOut();

        return;
      }
      if (error.response.href === URLEnum.REFRESH) {
        handleSignOut();
      }
      refreshTokenRequest = refreshTokenRequest || (await updateRefreshToken());
      try {
        const accessToken = refreshTokenRequest;
        refreshTokenRequest = undefined;
        if (accessToken) {
          Cookies.set('accessToken', accessToken);
          originalConfig.headers.Authorization = `Bearer ${accessToken}`;

          return httpClient(originalConfig);
        }
      } catch (_error) {
        handleSignOut();

        return Promise.reject(_error);
      }
    }

    return Promise.reject(error);
  }
);

export default httpClient;
