
import { useState } from 'react';

interface ZodiacWheelProps {
  onSelectSign?: (sign: string) => void;
  className?: string;
}

const ZodiacWheel = ({ onSelectSign, className = "" }: ZodiacWheelProps) => {
  const [hoveredSign, setHoveredSign] = useState<string | null>(null);
  
  const zodiacSigns = [
    { name: 'Áries', symbol: '♈', angle: 0 },
    { name: 'Touro', symbol: '♉', angle: 30 },
    { name: 'Gêmeos', symbol: '♊', angle: 60 },
    { name: 'Câncer', symbol: '♋', angle: 90 },
    { name: 'Leão', symbol: '♌', angle: 120 },
    { name: 'Virgem', symbol: '♍', angle: 150 },
    { name: 'Libra', symbol: '♎', angle: 180 },
    { name: 'Escorpião', symbol: '♏', angle: 210 },
    { name: 'Sagitário', symbol: '♐', angle: 240 },
    { name: 'Capricórnio', symbol: '♑', angle: 270 },
    { name: 'Aquário', symbol: '♒', angle: 300 },
    { name: 'Peixes', symbol: '♓', angle: 330 }
  ];

  const handleSignClick = (sign: string) => {
    if (onSelectSign) {
      onSelectSign(sign);
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Círculo externo */}
      <div className="w-full h-full rounded-full border border-celestial-400/30 relative zodiac-wheel">
        {/* Linhas divisórias */}
        {zodiacSigns.map((sign, index) => (
          <div 
            key={`line-${index}`}
            className="absolute top-1/2 left-1/2 h-full w-[1px] bg-celestial-400/20"
            style={{ transform: `translate(-50%, -50%) rotate(${sign.angle}deg)` }}
          />
        ))}
        
        {/* Sol central */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4">
          <div className="w-full h-full rounded-full bg-celestial-600/20 flex items-center justify-center border border-celestial-400/40">
            <svg className="w-3/4 h-3/4 text-celestial-300" viewBox="0 0 24 24">
              <path 
                fill="currentColor" 
                d="M12 1a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1zm0 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zm11-9a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1zM4 12a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1zm16.95-9a1 1 0 0 1 0 1.41l-.7.71a1 1 0 1 1-1.42-1.41l.71-.71A1 1 0 0 1 20.95 3zM4 4.7a1 1 0 0 1-1.41-1.42l.7-.7A1 1 0 0 1 4.7 4zM20 19.3a1 1 0 0 1-1.41 1.42l-.7-.7a1 1 0 0 1 1.41-1.42zM4 19.3l.7-.7A1 1 0 0 1 6.1 20l-.7.7a1 1 0 0 1-1.4-1.4zM12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
              />
            </svg>
          </div>
        </div>
        
        {/* Signos do zodíaco */}
        {zodiacSigns.map((sign, index) => {
          const radius = 42; // % do container
          const x = 50 + radius * Math.cos((sign.angle - 90) * (Math.PI / 180));
          const y = 50 + radius * Math.sin((sign.angle - 90) * (Math.PI / 180));
          
          return (
            <div
              key={sign.name}
              className={`absolute zodiac-sign cursor-pointer transition-all duration-300 ${
                hoveredSign === sign.name ? 'text-cosmic-300 scale-125' : 'text-celestial-300'
              }`}
              style={{
                top: `${y}%`,
                left: `${x}%`,
                transform: 'translate(-50%, -50%)'
              }}
              onMouseEnter={() => setHoveredSign(sign.name)}
              onMouseLeave={() => setHoveredSign(null)}
              onClick={() => handleSignClick(sign.name)}
            >
              <div className="text-lg font-bold">{sign.symbol}</div>
              <div 
                className="absolute w-max text-xs opacity-70 pointer-events-none"
                style={{
                  top: '120%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  textShadow: hoveredSign === sign.name ? '0 0 5px rgba(124, 58, 237, 0.8)' : 'none'
                }}
              >
                {sign.name}
              </div>
            </div>
          );
        })}
        
        {/* Círculo médio dos símbolos do zodíaco */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-full border border-celestial-400/20" />
        
        {/* Círculo interior dos símbolos do zodíaco */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/5 h-3/5 rounded-full border border-celestial-400/10" />
      </div>
    </div>
  );
};

export default ZodiacWheel;
