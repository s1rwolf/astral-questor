import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QRCodeGenerator from './QRCodeGenerator';
import { QuizResult } from '../utils/quizUtils';

interface ResultsDisplayProps {
  result: QuizResult & {
    isPremium?: boolean;
    futureAnalysis?: string;
    clientPhoto?: string | null;
  };
  shareUrl: string;
  onPremiumClick?: () => void;
}

const ResultsDisplay = ({ result, shareUrl, onPremiumClick }: ResultsDisplayProps) => {
  const [activeTab, setActiveTab] = useState('summary');
  const navigate = useNavigate();
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Meu Mapa Astral',
        text: 'Confira meu mapa astral personalizado!',
        url: shareUrl,
      })
      .catch((error) => console.log('Erro ao compartilhar:', error));
    } else {
      // Fallback para navegadores que não suportam a Web Share API
      navigator.clipboard.writeText(shareUrl)
        .then(() => alert('Link copiado para a área de transferência!'))
        .catch((err) => console.error('Erro ao copiar link:', err));
    }
  };
  
  const handleViewPremium = () => {
    if (result.isPremium) {
      navigate('/premium');
    } else {
      onPremiumClick?.();
    }
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="celestial-card overflow-hidden">
        {result.isPremium && result.clientPhoto && (
          <div className="relative h-32 md:h-40 overflow-hidden bg-cosmic-900">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cosmic-900/80"></div>
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-cosmic-400 overflow-hidden z-10"
            >
              <img 
                src={result.clientPhoto} 
                alt="Perfil" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
        
        <div className="p-8 text-center border-b border-celestial-700/20">
          <h2 className="text-3xl font-bold text-white mb-3">
            {result.isPremium ? 'Seu Mapa Astral Premium' : 'Seu Mapa Astral'}
          </h2>
          <p className="text-space-300">Uma análise detalhada baseada no seu perfil astrológico.</p>
          {result.isPremium && (
            <div className="inline-block mt-3 px-3 py-1 bg-cosmic-600/20 text-cosmic-400 text-sm rounded-full">
              Versão Premium Ativada
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-2 p-6 md:p-8">
            <div className="flex border-b border-celestial-700/20 mb-6">
              <button
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === 'summary' 
                    ? 'text-cosmic-400 border-b-2 border-cosmic-400' 
                    : 'text-space-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('summary')}
              >
                Resumo
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === 'details' 
                    ? 'text-cosmic-400 border-b-2 border-cosmic-400' 
                    : 'text-space-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('details')}
              >
                Detalhes
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === 'compatibility' 
                    ? 'text-cosmic-400 border-b-2 border-cosmic-400' 
                    : 'text-space-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('compatibility')}
              >
                Compatibilidade
              </button>
              {result.isPremium && (
                <button
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === 'future' 
                      ? 'text-cosmic-400 border-b-2 border-cosmic-400' 
                      : 'text-space-400 hover:text-white'
                  }`}
                  onClick={() => setActiveTab('future')}
                >
                  Futuro
                </button>
              )}
            </div>
            
            <div className="space-y-6">
              {activeTab === 'summary' && (
                <div className="animate-fade-in">
                  <p className="text-space-300 leading-relaxed">{result.summary}</p>
                  
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="celestial-card p-4">
                      <h4 className="text-lg font-medium text-white mb-3">Pontos Fortes</h4>
                      <ul className="space-y-2">
                        {result.strengths.map((strength, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-cosmic-400 mr-2">✦</span>
                            <span className="text-space-300">{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="celestial-card p-4">
                      <h4 className="text-lg font-medium text-white mb-3">Desafios</h4>
                      <ul className="space-y-2">
                        {result.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-cosmic-400 mr-2">✧</span>
                            <span className="text-space-300">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'details' && (
                <div className="animate-fade-in">
                  {Object.entries(result.details).map(([key, value]) => (
                    <div key={key} className="mb-6">
                      <h4 className="text-lg font-medium text-white mb-2">{key}</h4>
                      <p className="text-space-300">{value}</p>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === 'compatibility' && (
                <div className="animate-fade-in">
                  <h4 className="text-lg font-medium text-white mb-4">Compatibilidade Astrológica</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {result.compatibility.map((sign, index) => (
                      <div key={index} className="celestial-card p-3 flex items-center">
                        <div className="w-8 h-8 bg-cosmic-700/30 rounded-full flex items-center justify-center mr-3">
                          <span className="text-cosmic-300">★</span>
                        </div>
                        <span className="text-space-300">{sign}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'future' && result.isPremium && result.futureAnalysis && (
                <div className="animate-fade-in">
                  <div className="celestial-card p-5 border-cosmic-500/30">
                    <h4 className="text-xl font-medium text-cosmic-400 mb-4">Análise do Seu Futuro</h4>
                    <p className="text-space-300 leading-relaxed">{result.futureAnalysis}</p>
                    
                    <div className="mt-6 pt-6 border-t border-celestial-700/20">
                      <h5 className="text-lg font-medium text-white mb-3">Recomendações Personalizadas</h5>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-cosmic-400 mr-2">✦</span>
                          <span className="text-space-300">
                            Aproveite o período de crescimento profissional para buscar novas oportunidades.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-cosmic-400 mr-2">✦</span>
                          <span className="text-space-300">
                            Invista em sua comunicação para fortalecer seus relacionamentos.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-cosmic-400 mr-2">✦</span>
                          <span className="text-space-300">
                            Cuide da sua saúde mental com práticas de meditação e autocuidado.
                          </span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <button 
                        className="cosmic-button"
                        onClick={handleViewPremium}
                      >
                        Ver Análise Premium Completa
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="p-6 border-t md:border-t-0 md:border-l border-celestial-700/20 flex flex-col items-center justify-center">
            <div className="cosmic-glow">
              <QRCodeGenerator 
                value={shareUrl} 
                size={180} 
                className="mb-6"
              />
            </div>
            
            <button
              onClick={handleShare}
              className="cosmic-button w-full mb-4"
            >
              Compartilhar
            </button>
            
            <button
              onClick={() => window.print()}
              className="w-full px-6 py-3 bg-space-800 hover:bg-space-700 text-white rounded-full transition-all duration-300 mb-4"
            >
              Salvar PDF
            </button>
            
            {result.isPremium ? (
              <button
                onClick={handleViewPremium}
                className="w-full px-6 py-3 bg-gradient-to-r from-cosmic-600 to-cosmic-500 text-white rounded-full text-sm transition-all duration-300 hover:opacity-90"
              >
                Acessar Área Premium
              </button>
            ) : (
              <div className="mt-4 p-4 bg-cosmic-700/10 rounded-lg">
                <h4 className="text-sm font-medium text-cosmic-300 mb-2">Versão Premium</h4>
                <p className="text-space-400 text-sm mb-4">
                  Desbloqueie uma análise completa do seu mapa astral com interpretações detalhadas.
                </p>
                <button 
                  className="w-full px-4 py-2 bg-gradient-to-r from-cosmic-600 to-cosmic-500 text-white rounded-full text-sm transition-all duration-300 hover:opacity-90"
                  onClick={onPremiumClick}
                >
                  Saiba Mais
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;
