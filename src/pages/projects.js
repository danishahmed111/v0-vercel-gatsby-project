import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ProjectsPage = ({ data }) => {
  const projects = data.allMarkdownRemark.edges

  return (
    <Layout>
      <Seo title="Projects" description="Explore my portfolio of web development projects and case studies" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            A collection of web applications and solutions I've built, showcasing my expertise in full-stack development, UI/UX design, and modern web technologies.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map(({ node }) => {
                const image = getImage(node.frontmatter.image)
                return (
                  <Link
                    key={node.id}
                    to={node.fields.slug}
                    className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                  >
                    {image && (
                      <div className="relative overflow-hidden bg-gray-100 h-48">
                        <GatsbyImage
                          image={image}
                          alt={node.frontmatter.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {node.frontmatter.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {node.frontmatter.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {node.frontmatter.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {node.frontmatter.technologies.length > 3 && (
                          <span className="text-gray-500 text-xs px-3 py-1">
                            +{node.frontmatter.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                      <div className="text-blue-600 font-medium group-hover:text-blue-700">
                        View Case Study →
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No projects found yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
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
            date
            technologies
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`

export default ProjectsPage
