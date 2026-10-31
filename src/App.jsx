
import './App.css'

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <h2>Rajeswari</h2>

        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <p className="welcome">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>Rajeswari</span>
        </h1>

        <h2>Aspiring Cloud Computing Engineer</h2>

        <p>
          I am passionate about cloud computing, web development,
          and learning new technologies.
        </p>

        <a href="#projects" className="button">
          View My Projects
        </a>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          I am an enthusiastic learner interested in cloud computing
          and software development. I enjoy building projects,
          exploring AWS services, and improving my technical skills.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>My Skills</h2>

        <div className="skills">
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>React</div>
          <div>AWS</div>
          <div>GitHub</div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>My Projects</h2>

        <div className="project-card">
          <h3>AWS Portfolio Website</h3>

          <p>
            A portfolio website built using React and Vite,
            hosted on Amazon S3 and deployed using AWS
            CodePipeline and CodeBuild.
          </p>

          <p className="project-tech">
            React | Vite | AWS S3 | CodeBuild | CodePipeline
          </p>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact Me</h2>

        <p>
          Thank you for visiting my portfolio.
          I am always interested in learning and exploring
          new opportunities.
        </p>

        <p>Email: Add your email address here</p>
      </section>

      <footer>
        <p>© 2026 Rajeswari | My Portfolio</p>
      </footer>
    </div>
  )
}

export default App
