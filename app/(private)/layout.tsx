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
        className="h-auto text-[#333] overflow-auto"
        style={{ height: 'calc(100vh - 216px)', backgroundColor:'#EDF6F5' }}
      >
        {children}
      </div>
    </>
  )
}
