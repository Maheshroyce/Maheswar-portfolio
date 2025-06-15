
const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-white mb-4">Professional Summary</h3>
              <p className="text-gray-300 leading-relaxed">
                Result-driven Frontend Developer with proven expertise in designing and developing responsive, 
                user-focused web applications using JavaScript, React.js, Bootstrap, HTML5, and CSS3. 
                Adept at writing clean, scalable, and maintainable code with a strong emphasis on UI/UX best practices.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-white mb-4">Core Strengths</h3>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Cross-browser compatibility expertise
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Modern frameworks and APIs integration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Collaborative environments proficiency
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  High-quality digital experiences creation
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-white mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-blue-300">B.Tech in Computer Science and Engineering</h4>
                  <p className="text-gray-300">Kalasalingam Academy of Research and Education</p>
                  <p className="text-gray-400 text-sm">2021 - 2025 | CGPA: 7.83</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-300">Intermediate (MPC)</h4>
                  <p className="text-gray-300">Narayana Junior College</p>
                  <p className="text-gray-400 text-sm">2019 - 2021 | 92%</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-white mb-4">Certifications</h3>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Microsoft Azure Fundamentals
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Microsoft Azure AI Fundamentals
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  Oracle Cloud Infrastructure
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  CodeChef Code Combat
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
