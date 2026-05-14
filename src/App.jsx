export default function Portfolio() {
  const projects = [
    {
      title: 'Inventory Management System',
      description:
        'Full stack inventory tracking system with product management, stock updates, authentication, and reporting dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    },
    {
      title: 'Automated Timetable Generator',
      description:
        'Web-based timetable generation system that automatically schedules classes while handling conflicts and constraints.',
      tech: ['Python', 'JavaScript', 'Flask'],
    },
    {
      title: 'Movie Ratings Data Analysis',
      description:
        'Data analysis project focused on movie ratings, trends, and audience behavior using Python libraries.',
      tech: ['Python', 'Pandas', 'Matplotlib'],
    },
  ];

  const skills = [
    'C',
    'C++',
    'Python',
    'Java',
    'JavaScript',
    'HTML',
    'CSS',
    'React',
    'MongoDB',
    'SQL',
    'Git',
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="border-b border-gray-800 sticky top-0 bg-black/90 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">Mithanesh B</h1>
          <nav className="flex gap-6 text-sm text-gray-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-green-400 uppercase tracking-[0.3em] text-sm mb-4">
            Computer Science Engineering Student
          </p>
          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Building software that solves real problems.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            I’m a CSE student focused on full stack development, software engineering,
            problem solving, and practical project building. Interested in scalable systems,
            automation, and clean product design.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="https://github.com/Mithanesh"
              target="_blank"
              className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mithanesh/"
              target="_blank"
              className="px-6 py-3 rounded-2xl border border-gray-700 hover:bg-gray-900 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-green-500 blur-3xl opacity-20 rounded-full"></div>
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-[2rem] p-10 shadow-2xl">
            <div className="space-y-6">
              <div>
                <p className="text-gray-400 text-sm">Current Focus</p>
                <h3 className="text-2xl font-bold">Full Stack Development</h3>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Education</p>
                <h3 className="text-xl font-semibold">B.E. Computer Science Engineering</h3>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Core Interests</p>
                <div className="flex flex-wrap gap-3 mt-3">
                  {['Web Development', 'Data Science', 'Automation', 'DSA'].map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-900">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              I focus on building practical projects instead of just consuming tutorials.
              My interest is in understanding how systems work internally, improving
              problem-solving ability, and building applications that are useful in real scenarios.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
              <h3 className="text-4xl font-black mb-2">3+</h3>
              <p className="text-gray-400">Major Projects</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
              <h3 className="text-4xl font-black mb-2">10+</h3>
              <p className="text-gray-400">Technologies Learned</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
              <h3 className="text-4xl font-black mb-2">CSE</h3>
              <p className="text-gray-400">Engineering Domain</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
              <h3 className="text-4xl font-black mb-2">2027</h3>
              <p className="text-gray-400">Expected Graduation</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-900">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="px-6 py-4 bg-gray-900 border border-gray-800 rounded-2xl hover:border-green-400 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-900">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">Projects</h2>
          <p className="text-gray-400">Focused on practical implementation.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 rounded-full bg-black border border-gray-700 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-900">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-[2rem] border border-gray-700 p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Let’s Connect</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
            Looking for internships, collaborations, and opportunities to work on real-world software projects.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:mithanesh.vec@gmail.com"
              className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
            >
              Email Me
            </a>

            <a
              href="https://github.com/Mithanesh"
              target="_blank"
              className="px-8 py-4 rounded-2xl border border-gray-700 hover:bg-black transition"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="text-center text-gray-500 py-10 border-t border-gray-900 mt-10">
        © 2026 Mithanesh B. Built with React and Tailwind CSS.
      </footer>
    </div>
  );
}
