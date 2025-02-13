export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-8">
          About Me
        </h2>

        {/* Description Box */}
        <div className="rounded-xl px-8 py-6 border border-white/10 bg-white/5 backdrop-blur-md shadow-lg hover:-translate-y-1 transition-all duration-300">
          <p className="text-gray-300 leading-relaxed">
            Hi! I am <span className="text-blue-400 font-semibold">Sadiq Umar</span>, a passionate 
            <span className="text-blue-400"> MERN Stack Developer</span> with a love for building fast, user-friendly, 
            and scalable web applications. My focus is on crafting intuitive interfaces and ensuring smooth functionality.
          </p>
        </div>

        {/* Additional Info */}
        <p className="text-gray-400 mt-6">
          My expertise spans across **React, Next.js, Node.js, Express, and Tailwind CSS**. 
          I enjoy solving complex problems, optimizing web performance, and staying up to date with modern technologies.
        </p>

        {/* Skills Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-white mb-3">Skills:</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "JavaScript", "Firebase"].map((skill, index) => (
              <span key={index} className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:scale-105 transition">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8">
          <a href="#projects" className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 px-6 rounded-lg font-medium transition transform hover:-translate-y-1 hover:shadow-lg">
            View My Work
          </a>
        </div>

      </div>
    </section>
  );
};
