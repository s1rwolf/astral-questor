
import { useState } from 'react';

interface BirthDataFormProps {
  onSubmit: (data: { 
    birthDate: string; 
    birthTime: string; 
    birthPlace: string;
  }) => void;
}

const BirthDataForm = ({ onSubmit }: BirthDataFormProps) => {
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!birthDate) newErrors.birthDate = 'A data de nascimento é obrigatória';
    if (!birthTime) newErrors.birthTime = 'A hora de nascimento é obrigatória';
    if (!birthPlace) newErrors.birthPlace = 'O local de nascimento é obrigatório';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit({ birthDate, birthTime, birthPlace });
    }
  };

  return (
    <div className="celestial-card p-6 md:p-8 w-full max-w-md mx-auto">
      <h3 className="text-xl font-semibold text-white mb-6">Seus Dados de Nascimento</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="birthDate" className="cosmic-label">Data de Nascimento</label>
          <input
            type="date"
            id="birthDate"
            className={`cosmic-input w-full ${errors.birthDate ? 'border-red-500' : ''}`}
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          {errors.birthDate && <p className="text-red-500 text-xs mt-1">{errors.birthDate}</p>}
        </div>
        
        <div>
          <label htmlFor="birthTime" className="cosmic-label">Hora de Nascimento</label>
          <input
            type="time"
            id="birthTime"
            className={`cosmic-input w-full ${errors.birthTime ? 'border-red-500' : ''}`}
            value={birthTime}
            onChange={(e) => setBirthTime(e.target.value)}
          />
          {errors.birthTime && <p className="text-red-500 text-xs mt-1">{errors.birthTime}</p>}
          <p className="text-space-400 text-xs mt-1">Se não souber a hora exata, tente aproximar o máximo possível</p>
        </div>
        
        <div>
          <label htmlFor="birthPlace" className="cosmic-label">Local de Nascimento</label>
          <input
            type="text"
            id="birthPlace"
            placeholder="Ex: São Paulo, SP, Brasil"
            className={`cosmic-input w-full ${errors.birthPlace ? 'border-red-500' : ''}`}
            value={birthPlace}
            onChange={(e) => setBirthPlace(e.target.value)}
          />
          {errors.birthPlace && <p className="text-red-500 text-xs mt-1">{errors.birthPlace}</p>}
        </div>
        
        <button type="submit" className="cosmic-button w-full">
          Continuar
        </button>
      </form>
    </div>
  );
};

export default BirthDataForm;
