import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ProjectTemplate = ({ data }) => {
  const project = data.markdownRemark
  const image = getImage(project.frontmatter.image)

  return (
    <Layout>
      <Seo title={project.frontmatter.title} description={project.frontmatter.description} />

      <article className="bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/projects" className="text-slate-300 hover:text-white mb-6 inline-block">
              ← Back to Projects
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{project.frontmatter.title}</h1>
            <p className="text-xl text-slate-300 mb-6">{project.frontmatter.description}</p>
            <div className="flex flex-wrap gap-4">
              {project.frontmatter.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {image && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <GatsbyImage
              image={image}
              alt={project.frontmatter.title}
              className="rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Project Details Grid */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-2">
                Timeline
              </h3>
              <p className="text-lg font-semibold text-slate-900">{project.frontmatter.timeline}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-2">
                Role
              </h3>
              <p className="text-lg font-semibold text-slate-900">{project.frontmatter.role}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-2">
                Status
              </h3>
              <p className="text-lg font-semibold text-blue-600">{project.frontmatter.status}</p>
            </div>
          </div>

          {/* Case Study Content */}
          <div className="prose prose-slate max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: project.html }} />
          </div>

          {/* Project Links */}
          <div className="border-t pt-8 flex flex-col sm:flex-row gap-4">
            {project.frontmatter.liveUrl && (
              <a
                href={project.frontmatter.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Live Project →
              </a>
            )}
            {project.frontmatter.githubUrl && (
              <a
                href={project.frontmatter.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium"
              >
                View Source Code →
              </a>
            )}
          </div>
        </div>
      </article>

      {/* Related Projects */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">More Projects</h2>
          <Link
            to="/projects"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            View All Projects →
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
        date
        timeline
        role
        status
        liveUrl
        githubUrl
        technologies
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default ProjectTemplate
