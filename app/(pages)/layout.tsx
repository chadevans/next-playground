import { Button } from '@/ui/button'

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <div className="m-12">
      <Button
        title='Home'
        link='/'
      />
    </div>
    <div className="mx-24 lg:mx-36">
      <main>{children}</main>
    </div>
    </>
  );
}