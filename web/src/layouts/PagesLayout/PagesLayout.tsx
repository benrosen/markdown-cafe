import { Link, routes } from '@redwoodjs/router'

import { Toaster } from '@redwoodjs/web/toast'

type PageLayoutProps = {
  children: React.ReactNode
}

const PagesLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      {children}
    </>
  )
}

export default PagesLayout
