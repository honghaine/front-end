// import ProtectedRoute from '@/components/ProtectedRoute'
import Header from '@/components/header'

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <div
        className="bg-white h-auto text-[#333] overflow-auto"
        style={{ height: 'calc(100vh - 216px)' }}
      >
        {children}
      </div>
    </>
  )
}
