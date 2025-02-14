import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto"; 
        };
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    
                    {/* Logo */}
                    <a href="#" className="font-mono text-xl font-bold text-white">
                        SD<span className="text-blue-500">Q</span>
                    </a>

                    {/* Mobile Menu Icon */}
                    <div 
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="w-7 h-6 flex flex-col justify-between cursor-pointer md:hidden relative z-50"
                    >
                        <span className={`block h-[3px] bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
                        <span className={`block h-[3px] bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}></span>
                        <span className={`block h-[3px] bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-baseline space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</a>
                        <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</a>
                        <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition-colors">Projects</a>
                        <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Fullscreen with Scroll Fix */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-[#0a0a0a] transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden z-40 flex flex-col items-center justify-center space-y-8`}>
                <a href="#home" className="text-white text-xl" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="#about" className="text-white text-xl" onClick={() => setMenuOpen(false)}>About</a>
                <a href="#projects" className="text-white text-xl" onClick={() => setMenuOpen(false)}>Projects</a>
                <a href="#contact" className="text-white text-xl" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
        </nav>
    );
};
