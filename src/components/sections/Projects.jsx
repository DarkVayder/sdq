export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-[#0a0a0a] text-white">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Title */}
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-12 text-center">
          My Projects
        </h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Project Card */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-blue-400 mb-3">Academic Plug</h3>
            <p className="text-gray-300 mb-4">
              Academic-plug is an educational platform that provides easy access to high-quality 
              course materials for Nigerian and international students in higher institutions.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {["TypeScript", "JavaScript", "CSS", "HTML"].map((tech, key) => (
                <span key={key} className="px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full text-xs font-medium shadow-md">
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub Link */}
            <a href="https://github.com/Sdqumar/Academicplug" target="_blank" 
               className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-2 px-4 rounded-lg font-medium transition transform hover:-translate-y-1 hover:shadow-lg">
              View on GitHub
            </a>
          </div>

          {/* Project Card */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-blue-400 mb-3">Movie Streaming</h3>
            <p className="text-gray-300 mb-4">Movie Streaming platform</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {["TypeScript", "JavaScript", "CSS", "HTML"].map((tech, key) => (
                <span key={key} className="px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full text-xs font-medium shadow-md">
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub Link */}
            <a href="https://github.com/Sdqumar/Movie-Streaming" target="_blank" 
               className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-2 px-4 rounded-lg font-medium transition transform hover:-translate-y-1 hover:shadow-lg">
              View on GitHub
            </a>
          </div>

          {/* Project Card */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-blue-400 mb-3">school certificate system</h3>
            <p className="text-gray-300 mb-4">
            React app to verify and check valid certificate</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {["JavaScript", "HTML"].map((tech, key) => (
                <span key={key} className="px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full text-xs font-medium shadow-md">
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub Link */}
            <a href="https://github.com/Sdqumar/school-certificate-system" target="_blank" 
               className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-2 px-4 rounded-lg font-medium transition transform hover:-translate-y-1 hover:shadow-lg">
              View on GitHub
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
