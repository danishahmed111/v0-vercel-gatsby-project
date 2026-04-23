import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate full-stack developer with over 5 years of experience building web applications that make
              a difference. I love turning complex problems into simple, beautiful solutions.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or
              enjoying the great outdoors.
            </p>
          </div>
          <div className="flex justify-center">
            <StaticImage
              src="../images/about-image.jpg"
              alt="About John Doe"
              placeholder="blurred"
              width={400}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Senior Full-Stack Developer</h3>
                <p className="text-blue-600">Tech Company Inc. • 2021 - Present</p>
                <p className="text-gray-600 mt-2">
                  Leading development of scalable web applications using React, Node.js, and AWS.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Frontend Developer</h3>
                <p className="text-blue-600">Startup Co. • 2019 - 2021</p>
                <p className="text-gray-600 mt-2">
                  Built responsive user interfaces and improved application performance by 40%.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">B.S. Computer Science</h3>
                <p className="text-blue-600">University of Technology • 2015 - 2019</p>
                <p className="text-gray-600 mt-2">
                  Graduated Magna Cum Laude with focus on software engineering and algorithms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
