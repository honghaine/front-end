import Cookies from "js-cookie";
import { resetAllSlices } from '@/store';
export const handleSignOut = () => {
  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
  resetAllSlices();
};
