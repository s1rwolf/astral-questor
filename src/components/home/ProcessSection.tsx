
import { Link } from 'react-router-dom';
import { ProcessStep } from '../../types/home';

interface ProcessSectionProps {
  process: ProcessStep[];
  isVisible: boolean;
}

const ProcessSection = ({ process, isVisible }: ProcessSectionProps) => {
  return (
    <section id="como-funciona" className="py-20 bg-cosmic-900/20 relative">
      <div 
        className={`container mx-auto px-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-16">
          <span className="text-cosmic-400 text-sm font-medium uppercase tracking-wider">Processo</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Como Funciona
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <div 
              key={index} 
              className="celestial-card p-6 relative"
              style={{ 
                transitionDelay: `${index * 150}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease'
              }}
            >
              <div className="absolute -top-4 -left-2 w-8 h-8 rounded-full bg-cosmic-600 flex items-center justify-center text-sm font-semibold">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-space-300">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <Link to="/quiz" className="cosmic-button">
            Iniciar Agora
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
