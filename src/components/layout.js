import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <div className="min-h-screen flex flex-col">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className="flex-grow">{children}</main>
      <Footer author={data.site.siteMetadata?.author} />
    </div>
  )
}

export default Layout
