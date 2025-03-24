
import { useState } from 'react';
import ZodiacWheel from './ZodiacWheel';

interface HoroscopeSelectorProps {
  onSelectSign: (sign: string) => void;
  selectedSign: string | null;
}

const HoroscopeSelector = ({ onSelectSign, selectedSign }: HoroscopeSelectorProps) => {
  const [showInfo, setShowInfo] = useState(false);
  
  // Informações sobre cada signo
  const signInfo: Record<string, { element: string, traits: string }> = {
    'Áries': {
      element: 'Fogo',
      traits: 'Corajoso, determinado, confiante, entusiasta, otimista, honesto, apaixonado'
    },
    'Touro': {
      element: 'Terra',
      traits: 'Confiável, paciente, prático, dedicado, responsável, estável'
    },
    'Gêmeos': {
      element: 'Ar',
      traits: 'Adaptável, comunicativo, curioso, habilidade de aprender rapidamente'
    },
    'Câncer': {
      element: 'Água',
      traits: 'Emocional, intuitivo, tenaz, protetor, simpático, persuasivo'
    },
    'Leão': {
      element: 'Fogo',
      traits: 'Criativo, apaixonado, generoso, caloroso, animado, bem-humorado'
    },
    'Virgem': {
      element: 'Terra',
      traits: 'Leal, analítico, atencioso, trabalhador, prático, realista'
    },
    'Libra': {
      element: 'Ar',
      traits: 'Cooperativo, diplomático, gracioso, justo, social, pacífico'
    },
    'Escorpião': {
      element: 'Água',
      traits: 'Apaixonado, determinado, perceptivo, intuitivo, magnético, poderoso'
    },
    'Sagitário': {
      element: 'Fogo',
      traits: 'Generoso, idealista, otimista, amoroso, viajante'
    },
    'Capricórnio': {
      element: 'Terra',
      traits: 'Responsável, disciplinado, autocontrole, bom gerente, trabalhador'
    },
    'Aquário': {
      element: 'Ar',
      traits: 'Progressivo, original, independente, humanitário, revolucionário'
    },
    'Peixes': {
      element: 'Água',
      traits: 'Compassivo, artístico, intuitivo, gentil, sábio, conectado com o espiritual'
    }
  };

  // Cores para cada elemento
  const elementColors: Record<string, string> = {
    'Fogo': 'from-red-500 to-orange-400',
    'Terra': 'from-green-600 to-emerald-400',
    'Ar': 'from-blue-500 to-sky-400',
    'Água': 'from-indigo-600 to-purple-400'
  };

  const handleSelectSign = (sign: string) => {
    onSelectSign(sign);
    setShowInfo(true);
  };

  return (
    <div className="celestial-card p-6 md:p-8 w-full max-w-2xl mx-auto">
      <h3 className="text-xl font-semibold text-white mb-6 text-center">Selecione seu Signo do Zodíaco</h3>
      
      <div className="relative mb-8 aspect-square w-full max-w-md mx-auto">
        <ZodiacWheel onSelectSign={handleSelectSign} className="w-full h-full" />
      </div>
      
      {selectedSign && showInfo && (
        <div className="animate-fade-in mt-6">
          <div className={`p-4 rounded-lg bg-gradient-to-r ${elementColors[signInfo[selectedSign].element]} bg-opacity-20`}>
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-xl font-bold text-white">{selectedSign}</h4>
              <span className="px-3 py-1 rounded-full bg-space-800 text-sm">
                Elemento: {signInfo[selectedSign].element}
              </span>
            </div>
            
            <p className="text-white/80">
              <strong>Características:</strong> {signInfo[selectedSign].traits}
            </p>
          </div>
          
          <button 
            onClick={() => onSelectSign(selectedSign)} 
            className="cosmic-button w-full mt-4"
          >
            Confirmar Seleção
          </button>
        </div>
      )}
      
      {!selectedSign && (
        <p className="text-center text-space-300">
          Clique em um signo na roda zodiacal para selecionar
        </p>
      )}
    </div>
  );
};

export default HoroscopeSelector;
