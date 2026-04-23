import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm <span className="text-blue-600">John Doe</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                A passionate full-stack developer who loves creating beautiful, functional web applications that solve
                real-world problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/projects"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
                >
                  View My Work
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-center font-medium"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <StaticImage
                src="../images/hero-image.jpg"
                alt="John Doe"
                placeholder="blurred"
                width={400}
                height={400}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Technologies I Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["React", "Node.js", "Python", "TypeScript", "GraphQL", "AWS", "Docker", "PostgreSQL"].map((tech) => (
              <div
                key={tech}
                className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-900">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {data.allMarkdownRemark.edges.slice(0, 3).map(({ node }) => (
              <Link
                key={node.id}
                to={node.fields.slug}
                className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                    {node.frontmatter.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{node.frontmatter.description}</p>
                  <Link to={node.fields.slug} className="text-blue-600 hover:text-blue-700 font-medium">
                    Learn More →
                  </Link>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-block"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`

export default IndexPage
