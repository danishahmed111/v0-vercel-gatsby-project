export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-muted-foreground">
            Passionate developer creating beautiful and functional web applications
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Bio */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">My Story</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            I&apos;m a full-stack developer with a passion for building exceptional digital experiences. 
            With over 5 years of experience in web development, I&apos;ve worked on projects ranging from 
            startups to enterprise applications.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            My approach combines technical expertise with a deep understanding of user needs. I believe 
            in writing clean, maintainable code and creating interfaces that are both beautiful and intuitive.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Frontend</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>TailwindCSS</li>
                <li>React Native</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Backend</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Node.js & Express</li>
                <li>PostgreSQL</li>
                <li>Firebase</li>
                <li>REST APIs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-lg">Senior Full Stack Developer</h3>
              <p className="text-muted-foreground">Tech Company | 2022 - Present</p>
              <p className="text-sm text-muted-foreground mt-2">
                Leading development of microservices architecture and mentoring junior developers.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-lg">Full Stack Developer</h3>
              <p className="text-muted-foreground">StartUp Inc | 2020 - 2022</p>
              <p className="text-sm text-muted-foreground mt-2">
                Built and scaled e-commerce platform from MVP to supporting 50K+ users.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
