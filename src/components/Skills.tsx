
import { useState, useEffect, useRef } from 'react';
import { Monitor } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'React.js', color: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript', color: 'from-yellow-400 to-yellow-600' },
    { name: 'HTML5 & CSS3', color: 'from-orange-400 to-red-500' },
    { name: 'Bootstrap', color: 'from-purple-400 to-purple-600' },
    { name: 'MongoDB', color: 'from-green-400 to-green-600' },
    { name: 'Python', color: 'from-indigo-400 to-indigo-600' },
    { name: 'AWS Cloud', color: 'from-orange-500 to-yellow-500' },
  ];

  const tools = ['Git', 'Postman'];
  const operatingSystems = ['Linux', 'Windows'];
  const languages = ['English', 'Telugu', 'Tamil'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-4" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Technical Skills */}
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-md rounded-3xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-500 transform hover:scale-[1.02] shadow-2xl shadow-cyan-500/10">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mr-4"></div>
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`group cursor-pointer p-4 rounded-xl bg-gradient-to-r ${skill.color} bg-opacity-10 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 transform ${hoveredSkill === skill.name ? 'rotate-6 scale-110' : ''}`}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-center">
                    <span className="text-white font-medium group-hover:text-cyan-300 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & OS Combined */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-md rounded-3xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-500 transform hover:scale-[1.02] shadow-2xl shadow-cyan-500/10">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-green-400 to-teal-400 rounded-full mr-4"></div>
                Tools
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {tools.map((tool, index) => (
                  <div
                    key={tool}
                    className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-xl p-4 text-center text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-105 transform cursor-pointer shadow-lg hover:shadow-xl border border-gray-600/30 hover:border-cyan-400/50"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-md rounded-3xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-500 transform hover:scale-[1.02] shadow-2xl shadow-cyan-500/10">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <Monitor className="w-6 h-6 mr-3 text-cyan-400" />
                Operating Systems
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {operatingSystems.map((os, index) => (
                  <div
                    key={os}
                    className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-xl p-4 text-center text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-105 transform cursor-pointer shadow-lg hover:shadow-xl border border-gray-600/30 hover:border-cyan-400/50"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {os}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Languages Section */}
        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-md rounded-3xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-500 transform hover:scale-[1.02] shadow-2xl shadow-cyan-500/10">
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center justify-center">
            <div className="w-2 h-8 bg-gradient-to-b from-pink-400 to-purple-400 rounded-full mr-4"></div>
            Languages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((language, index) => (
              <div
                key={language}
                className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-xl p-6 text-center text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-105 transform cursor-pointer shadow-lg hover:shadow-xl border border-gray-600/30 hover:border-cyan-400/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-lg font-medium">{language}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
