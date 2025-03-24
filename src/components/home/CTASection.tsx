
import { Link } from 'react-router-dom';

interface CTASectionProps {
  isVisible: boolean;
}

const CTASection = ({ isVisible }: CTASectionProps) => {
  return (
    <section className="py-20 bg-cosmic-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-stars-pattern opacity-30"></div>
      
      <div 
        className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Comece sua jornada de autodescoberta hoje
          </h2>
          <p className="text-xl text-space-300 mb-10">
            Responda o quiz e descubra o que os astros revelam sobre você.
            Compartilhe com amigos e compare suas compatibilidades astrológicas.
          </p>
          <Link to="/quiz" className="cosmic-button text-lg px-8 py-4">
            Iniciar meu Mapa Astral
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
