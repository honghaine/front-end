
export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div>header</div>
      <div>{children}</div>
    </>
  )
}
