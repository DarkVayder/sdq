export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center w-full px-6 overflow-hidden">
      <div className="text-center z-10 max-w-screen-lg mx-auto">
        
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-cyan-400 bg-clip-text text-transparent leading-tight">
          Hi, I am Sadeeq Umar
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          I am a MERN stack developer who enjoys crafting clean, scalable web applications. My goal is to build solutions that offer both exceptional performance and a delightful user experience.
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <a 
            href="#projects" 
            className="bg-blue-700 text-white py-3 px-6 rounded font-medium transition transform hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            View Projects
          </a>

          <a 
            href="#contact" 
            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
};
