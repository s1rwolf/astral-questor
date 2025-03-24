
import { useState } from 'react';

interface Question {
  id: number;
  text: string;
  options: string[];
}

interface QuizFormProps {
  questions: Question[];
  onSubmit: (answers: Record<number, string>) => void;
}

const QuizForm = ({ questions, onSubmit }: QuizFormProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  const handleNext = () => {
    if (selectedOption) {
      setAnswers({
        ...answers,
        [questions[currentStep].id]: selectedOption
      });
      
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
        setSelectedOption(null);
      } else {
        const finalAnswers = {
          ...answers,
          [questions[currentStep].id]: selectedOption
        };
        onSubmit(finalAnswers);
      }
    }
  };

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="celestial-card p-6 md:p-8 w-full max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-space-400 text-sm">Pergunta {currentStep + 1} de {questions.length}</span>
          <span className="text-space-400 text-sm">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-space-800 h-2 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-cosmic-600 to-cosmic-400 h-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-6">{currentQuestion.text}</h3>
      
      <div className="space-y-4 mb-8">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
              selectedOption === option 
                ? 'bg-cosmic-600 text-white' 
                : 'bg-space-800 text-space-300 hover:bg-space-700'
            }`}
            onClick={() => setSelectedOption(option)}
          >
            {option}
          </button>
        ))}
      </div>
      
      <div className="flex justify-between">
        {currentStep > 0 && (
          <button
            type="button"
            className="px-6 py-3 bg-space-800 hover:bg-space-700 text-white rounded-full transition-all duration-300"
            onClick={() => {
              setCurrentStep(currentStep - 1);
              setSelectedOption(answers[questions[currentStep - 1].id] || null);
            }}
          >
            Anterior
          </button>
        )}
        
        <button
          type="button"
          className={`cosmic-button ml-auto ${!selectedOption ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleNext}
          disabled={!selectedOption}
        >
          {currentStep < questions.length - 1 ? 'Próxima' : 'Finalizar'}
        </button>
      </div>
    </div>
  );
};

export default QuizForm;
