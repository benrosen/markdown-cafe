import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type FlagLayoutProps = {
  children: React.ReactNode
}

const FlagsLayout = ({ children }: FlagLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.flags()}
            className="rw-link"
          >
            Flags
          </Link>
        </h1>
        <Link
          to={routes.newFlag()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Flag
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default FlagsLayout
