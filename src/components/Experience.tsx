
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 hidden md:block"></div>
          
          <div className="space-y-12">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 transform hover:scale-[1.02] shadow-2xl md:ml-16">
              {/* Timeline dot */}
              <div className="absolute -left-20 top-8 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-white/20 hidden md:block"></div>
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Frontend Developer</h3>
                  <h4 className="text-xl text-blue-300 font-semibold mb-3">GreatHire</h4>
                  <a 
                    href="https://greathire.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group"
                  >
                    <span>greathire.in</span>
                    <ExternalLink size={16} className="group-hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>
                
                <div className="flex flex-col items-start md:items-end space-y-2 mt-4 md:mt-0">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Calendar size={16} />
                    <span className="text-sm">Current</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <MapPin size={16} />
                    <span className="text-sm">Remote</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Working as a Frontend Developer specializing in creating responsive and user-friendly web applications 
                  using modern technologies including React.js, JavaScript, and contemporary UI frameworks.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h5 className="text-white font-semibold mb-2">Key Responsibilities</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Developing responsive web applications</li>
                      <li>• Implementing modern UI/UX designs</li>
                      <li>• Optimizing application performance</li>
                      <li>• Collaborating with cross-functional teams</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h5 className="text-white font-semibold mb-2">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {['Node.js', 'React.js', 'JavaScript', 'Tailwind CSS', 'AWS Cloud', 'MongoDB', 'Postman API', 'Snyk', 'Git', 'Express.js'].map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs border border-blue-400/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
