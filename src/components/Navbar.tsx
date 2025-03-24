
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? "bg-space-950/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cosmic-400 to-cosmic-700 flex items-center justify-center">
                <span className="absolute top-0 left-0 right-0 bottom-0 rounded-full bg-gradient-to-br from-cosmic-400 to-cosmic-700 animate-pulse opacity-50"></span>
                <span className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-white/80"></span>
                <span className="absolute bottom-2 right-2 w-1 h-1 rounded-full bg-white/60"></span>
              </div>
              <div className="orbiting-star" style={{"--orbit-radius": "15px"} as React.CSSProperties}></div>
            </div>
            <span className="text-xl font-semibold text-glow">AstralQuiz</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-space-300 hover:text-white transition-colors">Início</Link>
            <Link to="/quiz" className="text-space-300 hover:text-white transition-colors">Quiz</Link>
            <Link to="/about" className="text-space-300 hover:text-white transition-colors">Sobre</Link>
            <button className="cosmic-button">Iniciar</button>
          </div>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-space-300 hover:text-white transition-colors py-2">Início</Link>
              <Link to="/quiz" className="text-space-300 hover:text-white transition-colors py-2">Quiz</Link>
              <Link to="/about" className="text-space-300 hover:text-white transition-colors py-2">Sobre</Link>
              <button className="cosmic-button self-start">Iniciar</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
