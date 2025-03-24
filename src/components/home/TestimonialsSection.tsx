
import { Testimonial } from '../../types/home';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  isVisible: boolean;
}

const TestimonialsSection = ({ testimonials, isVisible }: TestimonialsSectionProps) => {
  return (
    <section className="py-20 relative">
      <div 
        className={`container mx-auto px-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-16">
          <span className="text-cosmic-400 text-sm font-medium uppercase tracking-wider">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            O que dizem nossos usuários
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="celestial-card p-6"
              style={{ 
                transitionDelay: `${index * 150}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease'
              }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-cosmic-700 flex items-center justify-center text-white font-medium mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-medium">{testimonial.name}</h4>
                </div>
              </div>
              <p className="text-space-300 italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
