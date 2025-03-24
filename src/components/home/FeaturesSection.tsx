
import { FeatureItem } from '../../types/home';

interface FeaturesSectionProps {
  features: FeatureItem[];
  isVisible: boolean;
}

const FeaturesSection = ({ features, isVisible }: FeaturesSectionProps) => {
  return (
    <section id="features" className="py-20 relative">
      <div 
        className={`container mx-auto px-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-16">
          <span className="text-cosmic-400 text-sm font-medium uppercase tracking-wider">Características</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            O que torna o AstralQuiz especial
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="celestial-card p-6 text-center"
              style={{ 
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease'
              }}
            >
              <div className="flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-space-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
