
import { useEffect, useState } from 'react';

const ZodiacBackground = () => {
  const [stars, setStars] = useState<JSX.Element[]>([]);
  const [constellations, setConstellations] = useState<JSX.Element[]>([]);
  
  useEffect(() => {
    // Criar estrelas aleatórias
    const starsArray: JSX.Element[] = [];
    for (let i = 0; i < 150; i++) {
      const size = 0.5 + Math.random() * 2;
      const opacity = 0.2 + Math.random() * 0.6;
      const animationDuration = 3 + Math.random() * 7;
      const animationDelay = Math.random() * 5;
      
      starsArray.push(
        <div
          key={`star-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity,
            animation: `twinkle ${animationDuration}s ease-in-out infinite ${animationDelay}s`
          }}
        />
      );
    }
    setStars(starsArray);
    
    // Criar constelações zodiacais
    const zodiacSigns = [
      'aries', 'taurus', 'gemini', 'cancer', 
      'leo', 'virgo', 'libra', 'scorpio', 
      'sagittarius', 'capricorn', 'aquarius', 'pisces'
    ];
    
    const constellationsArray: JSX.Element[] = [];
    
    zodiacSigns.forEach((sign, index) => {
      // Posição aleatória para cada constelação
      const top = Math.random() * 80 + 5; // % da altura
      const left = Math.random() * 80 + 5; // % da largura
      const rotation = Math.random() * 360;
      const orbitDuration = 80 + Math.random() * 80; // segundos
      const orbitDelay = Math.random() * -40; // segundos
      const size = 30 + Math.random() * 50; // tamanho da constelação
      
      constellationsArray.push(
        <div
          key={`constellation-${sign}`}
          className="absolute"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            animation: `orbit ${orbitDuration}s linear infinite ${orbitDelay}s`,
            transform: `rotate(${rotation}deg)`
          }}
        >
          <div className="constellation-container relative w-full h-full">
            {/* Pontos da constelação */}
            {Array.from({ length: 3 + Math.floor(Math.random() * 5) }).map((_, i) => (
              <div 
                key={`${sign}-star-${i}`}
                className="absolute w-1 h-1 bg-cosmic-400 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  boxShadow: '0 0 5px rgba(124, 58, 237, 0.8), 0 0 10px rgba(124, 58, 237, 0.5)',
                  opacity: 0.6 + Math.random() * 0.4
                }}
              />
            ))}
            
            {/* Linhas da constelação */}
            <div 
              className="absolute"
              style={{
                top: '50%',
                left: '50%',
                width: `${size * 0.8}px`,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.3), transparent)',
                transform: `translate(-50%, -50%) rotate(${Math.random() * 180}deg)`
              }}
            />
            <div 
              className="absolute"
              style={{
                top: '50%',
                left: '50%',
                width: `${size * 0.7}px`,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.2), transparent)',
                transform: `translate(-50%, -50%) rotate(${Math.random() * 180}deg)`
              }}
            />
          </div>
        </div>
      );
    });
    
    setConstellations(constellationsArray);
  }, []);
  
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      {stars}
      {constellations}
      
      {/* Órbitas com planetas */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 opacity-20">
        <div className="absolute inset-0 rounded-full border border-cosmic-400/20"></div>
        <div className="absolute w-3 h-3 rounded-full bg-cosmic-500" 
          style={{animation: 'orbit 30s linear infinite', '--orbit-radius': '12rem'} as React.CSSProperties}></div>
      </div>
      
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 opacity-20">
        <div className="absolute inset-0 rounded-full border border-celestial-400/20"></div>
        <div className="absolute w-2 h-2 rounded-full bg-celestial-400" 
          style={{animation: 'orbit 20s linear infinite', '--orbit-radius': '8rem'} as React.CSSProperties}></div>
      </div>
    </div>
  );
};

export default ZodiacBackground;
