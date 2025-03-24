
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuizForm from '../components/QuizForm';
import BirthDataForm from '../components/BirthDataForm';
import HoroscopeSelector from '../components/HoroscopeSelector';
import StarBackground from '../components/home/StarBackground';
import ZodiacBackground from '../components/ZodiacBackground';
import { quizQuestions, BirthData, QuizAnswers, generateQuizResult, generateShareableUrl } from '../utils/quizUtils';

const Quiz = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<'intro' | 'horoscope' | 'quiz' | 'birth-data'>('intro');
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers>({});
  const [selectedSign, setSelectedSign] = useState<string | null>(null);

  const handleStartQuiz = () => {
    setStep('horoscope');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSignSelect = (sign: string) => {
    setSelectedSign(sign);
    // Navegar para a próxima etapa após selecionar o signo
    setStep('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuizSubmit = (answers: QuizAnswers) => {
    setQuizAnswers(answers);
    setStep('birth-data');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBirthDataSubmit = (birthData: BirthData) => {
    // Incluir o signo selecionado nos dados
    const birthDataWithSign = {
      ...birthData,
      zodiacSign: selectedSign
    };
    
    // Generate result based on quiz answers and birth data
    const result = generateQuizResult(quizAnswers, birthDataWithSign);
    
    // Generate shareable URL
    const shareUrl = generateShareableUrl(birthDataWithSign);
    
    // Store data in localStorage (in a real app, this would go to a database)
    localStorage.setItem('astralQuizResult', JSON.stringify(result));
    localStorage.setItem('astralQuizShareUrl', shareUrl);
    
    // Navigate to results page
    navigate('/results');
  };

  return (
    <>
      <StarBackground />
      <ZodiacBackground />
      <Navbar />
      
      <main className="pt-28 pb-20 min-h-screen">
        <div className="container mx-auto px-6">
          {step === 'intro' && (
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Descubra seu Mapa Astral Personalizado
              </h1>
              <p className="text-xl text-space-300 mb-8">
                Este quiz interativo combinado com seus dados astrológicos irá revelar insights
                profundos sobre sua personalidade, relacionamentos e potenciais.
              </p>
              
              <div className="celestial-card p-6 md:p-8 mb-10 text-left">
                <h2 className="text-xl font-semibold text-white mb-4">Antes de começar:</h2>
                
                <ul className="space-y-3 text-space-300">
                  <li className="flex items-start">
                    <span className="text-cosmic-400 mr-2">•</span>
                    <span>Este quiz contém {quizQuestions.length} perguntas simples sobre suas preferências e personalidade.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cosmic-400 mr-2">•</span>
                    <span>Primeiro você selecionará seu signo na roda do zodíaco.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cosmic-400 mr-2">•</span>
                    <span>Após o quiz, precisaremos da sua data, hora e local de nascimento para cálculos precisos.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cosmic-400 mr-2">•</span>
                    <span>Seus dados são tratados com segurança e usados apenas para gerar sua análise.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cosmic-400 mr-2">•</span>
                    <span>Ao final, você receberá um QR Code para compartilhar seus resultados.</span>
                  </li>
                </ul>
              </div>
              
              <button onClick={handleStartQuiz} className="cosmic-button text-lg">
                Começar o Quiz
              </button>
            </div>
          )}
          
          {step === 'horoscope' && (
            <div className="animate-fade-in">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Qual é o seu Signo Solar?
              </h1>
              <p className="text-space-300 max-w-2xl mx-auto text-center mb-8">
                O signo solar representa a essência do seu ser, sua personalidade básica e vitalidade.
                Selecione seu signo na roda zodiacal interativa abaixo.
              </p>
              
              <HoroscopeSelector
                onSelectSign={handleSignSelect}
                selectedSign={selectedSign}
              />
            </div>
          )}
          
          {step === 'quiz' && (
            <div className="animate-fade-in">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Responda para criar seu perfil astrológico
              </h1>
              
              <QuizForm 
                questions={quizQuestions} 
                onSubmit={handleQuizSubmit} 
              />
            </div>
          )}
          
          {step === 'birth-data' && (
            <div className="animate-fade-in">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Informações de Nascimento
              </h1>
              <p className="text-space-300 max-w-2xl mx-auto text-center mb-10">
                Precisamos desses dados para calcular a posição exata dos astros no momento do seu nascimento,
                o que é essencial para a criação do seu mapa astral personalizado.
              </p>
              
              <BirthDataForm onSubmit={handleBirthDataSubmit} />
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Quiz;
