
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "2024",
      description: "Fundamental concepts of cloud services and Microsoft Azure platform architecture and solutions.",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/KORIVIMAHESWARREDDY-2041/49311287C7FF76C1?sharingId=1640783349933581",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Microsoft Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "2024", 
      description: "Fundamental concepts of artificial intelligence and machine learning on Microsoft Azure platform.",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/KORIVIMAHESWARREDDY-2041/D2EF4596C67029A7?sharingId=1640783349933581",
      color: "from-purple-500 to-blue-600"
    },
    {
      title: "Oracle Cloud Infrastructure",
      issuer: "Oracle",
      date: "2024",
      description: "Core concepts and services of Oracle Cloud Infrastructure platform and enterprise solutions.",
      link: "https://brm-certification.oracle.com/apex/f?p=1111:6:102365636741995",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Code Combat",
      issuer: "Coding Ninjas",
      date: "2022",
      description: "Competitive programming certification for securing 669th rank and scoring 70/220 in the coding contest.",
      link: "https://www.codechef.com/certificates/public/a2d768a",
      color: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="group bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-md rounded-3xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-xl animate-fade-in shadow-cyan-500/10"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`w-full h-32 bg-gradient-to-br ${cert.color} rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
                <Award className="text-white text-4xl opacity-80" size={48} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-gray-300 text-sm mb-3">
                    <span className="font-semibold text-cyan-300">{cert.issuer}</span>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed text-sm mb-6">
                  {cert.description}
                </p>

                <button
                  onClick={() => window.open(cert.link, '_blank')}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 group-hover:from-cyan-400 group-hover:to-purple-500"
                >
                  <Award size={20} />
                  <span>View Certificate</span>
                  <ExternalLink size={16} className="group-hover:scale-110 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
