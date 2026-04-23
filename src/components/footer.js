import { useStaticQuery, graphql } from "gatsby"

const Footer = ({ author }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            twitter
            github
            linkedin
          }
        }
      }
    }
  `)

  const { social } = data.site.siteMetadata

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href={`https://twitter.com/${social.twitter}`} className="hover:text-blue-400 transition-colors">
                Twitter
              </a>
              <a href={`https://github.com/${social.github}`} className="hover:text-blue-400 transition-colors">
                GitHub
              </a>
              <a href={`https://linkedin.com/in/${social.linkedin}`} className="hover:text-blue-400 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/about" className="block hover:text-blue-400 transition-colors">
                About
              </a>
              <a href="/projects" className="block hover:text-blue-400 transition-colors">
                Projects
              </a>
              <a href="/contact" className="block hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <p className="text-gray-300">Let's work together on your next project.</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {author}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
