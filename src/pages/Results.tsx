
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ResultsDisplay from '../components/ResultsDisplay';
import { QuizResult } from '../utils/quizUtils';

const Results = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState<QuizResult | null>(null);
  const [shareUrl, setShareUrl] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch from an API
    // For now, we'll get from localStorage
    const storedResult = localStorage.getItem('astralQuizResult');
    const storedShareUrl = localStorage.getItem('astralQuizShareUrl');
    
    if (storedResult && storedShareUrl) {
      // Simulate loading for better UX
      setTimeout(() => {
        setResult(JSON.parse(storedResult));
        setShareUrl(storedShareUrl);
        setLoading(false);
      }, 1500);
    } else {
      // If no result, redirect to quiz
      navigate('/quiz');
    }
  }, [navigate]);

  return (
    <>
      <div className="stars-container"></div>
      <Navbar />
      
      <main className="pt-28 pb-20 min-h-screen">
        <div className="container mx-auto px-6">
          {loading ? (
            <div className="flex flex-col items-center justify-center animate-fade-in">
              <div className="relative w-16 h-16 mb-8">
                <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full border-4 border-cosmic-600/20 border-t-cosmic-400 animate-spin"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cosmic-400"></div>
              </div>
              <h2 className="text-2xl font-semibold text-white mb-3">Consultando os astros...</h2>
              <p className="text-space-400">Estamos gerando seu mapa astral personalizado</p>
            </div>
          ) : (
            result && (
              <div className="animate-fade-in">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
                  Seu Mapa Astral está Pronto
                </h1>
                <p className="text-space-300 text-xl max-w-2xl mx-auto text-center mb-12">
                  Confira a análise personalizada baseada nos seus dados e respostas.
                </p>
                
                <ResultsDisplay result={result} shareUrl={shareUrl} />
                
                <div className="mt-16 text-center">
                  <h3 className="text-2xl font-semibold text-white mb-4">Quer uma Análise Mais Profunda?</h3>
                  <p className="text-space-300 max-w-2xl mx-auto mb-8">
                    Desbloqueie a versão premium do seu mapa astral para acessar previsões detalhadas, 
                    análises de compatibilidade avançadas e orientações personalizadas para diferentes 
                    áreas da sua vida.
                  </p>
                  <button className="cosmic-button text-lg">
                    Acessar Versão Premium
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Results;
