
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Index = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({
    hero: false,
    features: false,
    process: false,
    testimonials: false,
    cta: false
  });
  
  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    features: useRef<HTMLDivElement>(null),
    process: useRef<HTMLDivElement>(null),
    testimonials: useRef<HTMLDivElement>(null),
    cta: useRef<HTMLDivElement>(null)
  };
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observers: IntersectionObserver[] = [];
    
    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [key]: true }));
            }
          });
        }, observerOptions);
        
        observer.observe(ref.current);
        observers.push(observer);
      }
    });
    
    // Create stars for the background
    createStars();
    
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);
  
  const createStars = () => {
    const starsContainer = document.querySelector('.stars-container');
    if (!starsContainer) return;
    
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Random positioning
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      
      // Random size
      const size = `${0.5 + Math.random() * 1.5}px`;
      star.style.width = size;
      star.style.height = size;
      
      // Random animation duration and delay
      star.style.setProperty('--twinkle-duration', `${3 + Math.random() * 4}s`);
      star.style.setProperty('--twinkle-delay', `${Math.random() * 5}s`);
      
      starsContainer.appendChild(star);
    }
  };
  
  const features = [
    {
      title: "Análise Personalizada",
      description: "Interpretação única baseada em seus dados astrológicos e respostas ao quiz.",
      icon: (
        <div className="w-12 h-12 rounded-full bg-cosmic-700/30 flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-cosmic-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
      )
    },
    {
      title: "Compatibilidade Astrológica",
      description: "Descubra quais signos são mais compatíveis com seu perfil astral.",
      icon: (
        <div className="w-12 h-12 rounded-full bg-cosmic-700/30 flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-cosmic-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      )
    },
    {
      title: "Previsões Futuras",
      description: "Compreenda tendências e energias que podem influenciar seu caminho.",
      icon: (
        <div className="w-12 h-12 rounded-full bg-cosmic-700/30 flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-cosmic-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      )
    },
    {
      title: "Compartilhamento Fácil",
      description: "Compartilhe sua análise via QR Code ou redes sociais com amigos e família.",
      icon: (
        <div className="w-12 h-12 rounded-full bg-cosmic-700/30 flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-cosmic-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        </div>
      )
    }
  ];
  
  const process = [
    {
      step: "1",
      title: "Complete o Quiz",
      description: "Responda perguntas simples sobre sua personalidade e preferências."
    },
    {
      step: "2",
      title: "Informe seus Dados",
      description: "Forneça sua data, hora e local de nascimento para cálculos precisos."
    },
    {
      step: "3",
      title: "Receba sua Análise",
      description: "Obtenha um relatório personalizado baseado em seu perfil astrológico."
    },
    {
      step: "4",
      title: "Compartilhe & Explore",
      description: "Compartilhe seus resultados e explore análises mais detalhadas."
    }
  ];
  
  const testimonials = [
    {
      name: "Ana C.",
      text: "A análise foi surpreendentemente precisa! Me identifico com todas as características descritas, e as previsões têm me ajudado a tomar decisões mais conscientes.",
      avatar: "A"
    },
    {
      name: "Rafael M.",
      text: "Sempre fui cético sobre astrologia, mas o relatório gerado pelo AstralQuiz me impressionou pela profundidade e relevância. Recomendo a todos!",
      avatar: "R"
    },
    {
      name: "Juliana T.",
      text: "A interface é linda e intuitiva. O que mais gostei foi a facilidade de compartilhar meus resultados com amigos através do QR code.",
      avatar: "J"
    }
  ];
  
  return (
    <>
      <div className="stars-container"></div>
      <Navbar />
      
      {/* Hero Section */}
      <section 
        ref={sectionRefs.hero}
        className="min-h-screen flex items-center justify-center relative pt-20 pb-16"
      >
        <div className="cosmic-glow absolute inset-0 -z-10"></div>
        
        <div 
          className={`container mx-auto px-6 text-center transition-all duration-1000 ${
            isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mb-8 inline-block">
            <div className="relative inline-block animate-star-float">
              <svg className="w-16 h-16 text-cosmic-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1.057l2.53 7.797h8.195l-6.628 4.821 2.53 7.797-6.628-4.821-6.628 4.821 2.53-7.797-6.628-4.821h8.195z" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Descubra seu <span className="text-cosmic-400">Mapa Astral</span> <br />
            através de um Quiz
          </h1>
          
          <p className="text-xl text-space-300 max-w-3xl mx-auto mb-10">
            Responda algumas perguntas simples e desvende os segredos que os astros
            revelam sobre sua personalidade, relacionamentos e caminho de vida.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/quiz" className="cosmic-button text-lg">
              Iniciar Quiz
            </Link>
            <a href="#como-funciona" className="px-6 py-3 bg-space-800 hover:bg-space-700 text-white rounded-full transition-all duration-300 text-lg">
              Saiba Mais
            </a>
          </div>
          
          <div className="mt-16 py-4 px-6 rounded-xl bg-space-900/50 backdrop-blur-md inline-block">
            <p className="text-space-400">
              <span className="text-cosmic-300">✨</span> Mais de 10.000 pessoas já descobriram seus mapas astrais
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#features" className="text-space-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>
      
      {/* Features Section */}
      <section 
        id="features"
        ref={sectionRefs.features}
        className="py-20 relative"
      >
        <div 
          className={`container mx-auto px-6 transition-all duration-1000 ${
            isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
                  opacity: isVisible.features ? 1 : 0,
                  transform: isVisible.features ? 'translateY(0)' : 'translateY(20px)',
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
      
      {/* How It Works Section */}
      <section 
        id="como-funciona"
        ref={sectionRefs.process}
        className="py-20 bg-cosmic-900/20 relative"
      >
        <div 
          className={`container mx-auto px-6 transition-all duration-1000 ${
            isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
                  opacity: isVisible.process ? 1 : 0,
                  transform: isVisible.process ? 'translateY(0)' : 'translateY(20px)',
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
      
      {/* Testimonials Section */}
      <section 
        ref={sectionRefs.testimonials}
        className="py-20 relative"
      >
        <div 
          className={`container mx-auto px-6 transition-all duration-1000 ${
            isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
                  opacity: isVisible.testimonials ? 1 : 0,
                  transform: isVisible.testimonials ? 'translateY(0)' : 'translateY(20px)',
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
      
      {/* CTA Section */}
      <section 
        ref={sectionRefs.cta}
        className="py-20 bg-cosmic-gradient relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-stars-pattern opacity-30"></div>
        
        <div 
          className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ${
            isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
      
      <Footer />
    </>
  );
};

export default Index;
