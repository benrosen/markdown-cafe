import Footer from 'src/components/Footer/Footer'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="grow">{children}</div>
      <Footer />
    </div>
  )
}

export default DefaultLayout
