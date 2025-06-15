
const Projects = () => {
  const projects = [
    {
      title: "Auto Pilot Scheduler Pro",
      description: "Advanced scheduling application with automated features for efficient time management and task organization.",
      tech: ["React.js", "JavaScript", "CSS3"],
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gradient: "from-blue-500 to-purple-600",
      delay: "0ms"
    },
    {
      title: "To-Do Application",
      description: "Interactive task management application with real-time updates and intuitive user interface design.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gradient: "from-green-500 to-teal-600",
      delay: "200ms"
    },
    {
      title: "Book Tracker",
      description: "Comprehensive book tracking application with reading progress analytics and recommendation capabilities.",
      tech: ["React.js", "MongoDB", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gradient: "from-orange-500 to-red-600",
      delay: "400ms"
    },
    {
      title: "Malware Classification System",
      description: "Deep learning-based malware classification framework using CNN architectures for cybersecurity enhancement.",
      tech: ["Python", "CNN", "Deep Learning"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gradient: "from-purple-500 to-pink-600",
      delay: "600ms"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-md rounded-3xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl animate-fade-in shadow-xl shadow-cyan-500/10"
              style={{ animationDelay: project.delay }}
            >
              <div className="w-full h-48 rounded-2xl mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-gray-700/50 to-gray-800/50 text-cyan-300 rounded-full text-sm font-medium border border-cyan-400/30 hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Maheshroyce"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-gray-700/50 to-gray-900/50 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 border border-cyan-400/30 hover:border-cyan-400/50"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
