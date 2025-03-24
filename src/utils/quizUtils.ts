
// Types for Quiz data
export interface QuizQuestion {
  id: number;
  text: string;
  options: string[];
}

export interface BirthData {
  birthDate: string;
  birthTime: string;
  birthPlace: string;
}

export interface QuizAnswers {
  [key: number]: string;
}

export interface QuizResult {
  summary: string;
  details: {
    [key: string]: string;
  };
  compatibility: string[];
  strengths: string[];
  challenges: string[];
}

// Sample questions for the quiz
export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    text: "Como você se descreveria em situações sociais?",
    options: [
      "Extrovertido e energético",
      "Introspectivo e observador",
      "Adaptável, depende da situação",
      "Prefiro pequenos grupos de pessoas conhecidas"
    ]
  },
  {
    id: 2,
    text: "Como você toma decisões importantes?",
    options: [
      "Baseado na lógica e nos fatos",
      "Seguindo minha intuição e sentimentos",
      "Considerando o impacto nas pessoas ao meu redor",
      "Analisando prós e contras metodicamente"
    ]
  },
  {
    id: 3,
    text: "Qual destas atividades você prefere em seu tempo livre?",
    options: [
      "Atividades físicas e aventuras",
      "Leitura e aprendizado",
      "Socializar com amigos",
      "Atividades artísticas e criativas"
    ]
  },
  {
    id: 4,
    text: "Como você reage a mudanças inesperadas?",
    options: [
      "Abraço a mudança como uma oportunidade",
      "Fico ansioso e preciso de tempo para processar",
      "Adapto-me rapidamente, mas prefiro estabilidade",
      "Resisto inicialmente, mas aceito quando necessário"
    ]
  },
  {
    id: 5,
    text: "Qual destas qualidades você mais valoriza em si mesmo?",
    options: [
      "Criatividade e originalidade",
      "Lealdade e confiabilidade",
      "Inteligência e conhecimento",
      "Compaixão e empatia"
    ]
  },
  {
    id: 6,
    text: "Como você lida com o estresse?",
    options: [
      "Pratico exercícios físicos",
      "Busco tempo sozinho para refletir",
      "Converso com amigos ou familiares",
      "Mergulho em hobbies ou atividades criativas"
    ]
  },
  {
    id: 7,
    text: "Qual destas frases melhor descreve sua abordagem aos desafios?",
    options: [
      "Enfrento-os de frente com determinação",
      "Planejo cuidadosamente antes de agir",
      "Procuro ajuda e conselhos de outros",
      "Adapto-me conforme a situação evolui"
    ]
  }
];

// Process quiz and birth data to generate a personalized result
export const generateQuizResult = (answers: QuizAnswers, birthData: BirthData): QuizResult => {
  // In a real implementation, this would connect to an astrological API
  // For this demo, we'll return mock data
  
  // Parse birth date to extract zodiac sign
  const birthDate = new Date(birthData.birthDate);
  const month = birthDate.getMonth() + 1;
  const day = birthDate.getDate();
  
  // Simplified zodiac sign determination
  let zodiacSign = "";
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) zodiacSign = "Áries";
  else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) zodiacSign = "Touro";
  else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) zodiacSign = "Gêmeos";
  else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) zodiacSign = "Câncer";
  else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) zodiacSign = "Leão";
  else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) zodiacSign = "Virgem";
  else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) zodiacSign = "Libra";
  else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) zodiacSign = "Escorpião";
  else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) zodiacSign = "Sagitário";
  else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) zodiacSign = "Capricórnio";
  else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) zodiacSign = "Aquário";
  else zodiacSign = "Peixes";
  
  // Mock personality traits based on answers
  let personalityTraits = [];
  if (answers[1] === "Extrovertido e energético") personalityTraits.push("extrovertido");
  if (answers[1] === "Introspectivo e observador") personalityTraits.push("introspectivo");
  if (answers[2] === "Baseado na lógica e nos fatos") personalityTraits.push("racional");
  if (answers[2] === "Seguindo minha intuição e sentimentos") personalityTraits.push("intuitivo");
  if (answers[5] === "Criatividade e originalidade") personalityTraits.push("criativo");
  if (answers[5] === "Lealdade e confiabilidade") personalityTraits.push("leal");
  
  // Generate strengths based on zodiac and quiz answers
  const strengths = getStrengthsByZodiac(zodiacSign, personalityTraits);
  
  // Generate challenges based on zodiac and quiz answers
  const challenges = getChallengesByZodiac(zodiacSign, personalityTraits);
  
  // Generate compatibility based on zodiac
  const compatibility = getCompatibilityByZodiac(zodiacSign);
  
  return {
    summary: `Como ${zodiacSign}, você possui uma personalidade ${personalityTraits.join(", ")}. Seu mapa astral revela uma jornada única, onde suas características naturais se alinham com os corpos celestes no momento do seu nascimento. Este relatório oferece uma visão inicial sobre sua energia cósmica e como ela pode influenciar diversos aspectos da sua vida.`,
    details: {
      "Sol em " + zodiacSign: getZodiacDescription(zodiacSign),
      "Ascendente": "Seu ascendente representa como você se projeta para o mundo. Uma análise completa requer cálculos precisos baseados no horário e local de nascimento.",
      "Lua": "A posição da lua no seu mapa representa suas emoções e instintos. Para uma análise completa, acesse a versão premium.",
      "Vênus": "Vênus representa como você expressa e recebe amor. Para uma análise completa, acesse a versão premium.",
      "Marte": "Marte representa sua energia e como você age no mundo. Para uma análise completa, acesse a versão premium."
    },
    compatibility: compatibility,
    strengths: strengths,
    challenges: challenges
  };
};

// Generate a shareable URL for the results
export const generateShareableUrl = (birthData: BirthData): string => {
  // In a real implementation, this would create a unique URL
  // For this demo, we'll return a mock URL
  const encodedData = btoa(JSON.stringify(birthData));
  return `https://astralquiz.example.com/results/${encodedData}`;
};

// Helper functions
function getZodiacDescription(sign: string): string {
  const descriptions: Record<string, string> = {
    "Áries": "Pessoas de Áries são conhecidas por sua natureza ousada, energética e pioneira. Você é movido por uma força interior que o impulsiona a liderar e iniciar novas jornadas.",
    "Touro": "Como Touro, você valoriza estabilidade, conforto e apreciação sensorial do mundo. Sua determinação e paciência são marcas registradas da sua personalidade.",
    "Gêmeos": "Gêmeos são comunicativos, curiosos e versáteis. Você tem uma mente ágil que busca constantemente novos estímulos e conhecimentos.",
    "Câncer": "Como Câncer, você é naturalmente intuitivo, protetor e emocionalmente profundo. Sua conexão com o lar e a família é fundamental para seu bem-estar.",
    "Leão": "Leão é conhecido por sua natureza generosa, leal e expressiva. Você tem um brilho natural que atrai as pessoas para sua presença magnética.",
    "Virgem": "Como Virgem, você é analítico, metódico e orientado para os detalhes. Sua abordagem prática para a vida é complementada por um desejo genuíno de ajudar os outros.",
    "Libra": "Libra busca equilíbrio, harmonia e cooperação. Você tem um senso estético refinado e valoriza relacionamentos significativos.",
    "Escorpião": "Como Escorpião, você é intenso, perceptivo e transformador. Sua profundidade emocional e poder de recuperação são forças significativas em sua vida.",
    "Sagitário": "Sagitário é aventureiro, otimista e filosófico. Você busca expandir seus horizontes através de experiências e conhecimentos variados.",
    "Capricórnio": "Como Capricórnio, você é ambicioso, disciplinado e prático. Sua abordagem estruturada para a vida o ajuda a alcançar objetivos de longo prazo.",
    "Aquário": "Aquário é inovador, independente e humanitário. Você tem uma perspectiva única que muitas vezes está à frente do seu tempo.",
    "Peixes": "Como Peixes, você é compassivo, intuitivo e artisticamente inclinado. Sua natureza empática permite uma conexão profunda com o mundo ao seu redor."
  };
  
  return descriptions[sign] || "Descrição não disponível.";
}

function getStrengthsByZodiac(sign: string, traits: string[]): string[] {
  const baseStrengths: Record<string, string[]> = {
    "Áries": ["Coragem", "Determinação", "Energia"],
    "Touro": ["Persistência", "Confiabilidade", "Sensualidade"],
    "Gêmeos": ["Adaptabilidade", "Comunicação", "Curiosidade"],
    "Câncer": ["Intuição", "Cuidado", "Memória"],
    "Leão": ["Liderança", "Generosidade", "Criatividade"],
    "Virgem": ["Atenção aos detalhes", "Análise", "Praticidade"],
    "Libra": ["Diplomacia", "Charme", "Senso de justiça"],
    "Escorpião": ["Intensidade", "Lealdade", "Transformação"],
    "Sagitário": ["Otimismo", "Honestidade", "Espírito aventureiro"],
    "Capricórnio": ["Responsabilidade", "Disciplina", "Ambição"],
    "Aquário": ["Originalidade", "Humanitarismo", "Independência"],
    "Peixes": ["Compaixão", "Imaginação", "Espiritualidade"]
  };
  
  // Add strengths based on personality traits
  let additionalStrengths: string[] = [];
  if (traits.includes("extrovertido")) additionalStrengths.push("Carisma social");
  if (traits.includes("introspectivo")) additionalStrengths.push("Reflexão profunda");
  if (traits.includes("racional")) additionalStrengths.push("Pensamento lógico");
  if (traits.includes("intuitivo")) additionalStrengths.push("Compreensão instintiva");
  if (traits.includes("criativo")) additionalStrengths.push("Expressão artística");
  if (traits.includes("leal")) additionalStrengths.push("Comprometimento");
  
  // Combine and return unique strengths
  return [...baseStrengths[sign], ...additionalStrengths].slice(0, 5);
}

function getChallengesByZodiac(sign: string, traits: string[]): string[] {
  const baseChallenges: Record<string, string[]> = {
    "Áries": ["Impaciência", "Impulsividade", "Temperamento"],
    "Touro": ["Teimosia", "Possessividade", "Resistência à mudança"],
    "Gêmeos": ["Inconsistência", "Dispersão", "Superficialidade"],
    "Câncer": ["Sensibilidade excessiva", "Apego", "Humor instável"],
    "Leão": ["Orgulho", "Necessidade de atenção", "Autoritarismo"],
    "Virgem": ["Perfeccionismo", "Crítica", "Preocupação"],
    "Libra": ["Indecisão", "Evitar conflitos", "Dependência"],
    "Escorpião": ["Ciúme", "Desconfiança", "Obsessão"],
    "Sagitário": ["Exagero", "Descuido", "Inquietação"],
    "Capricórnio": ["Pessimismo", "Frieza", "Rigidez"],
    "Aquário": ["Desapego", "Excentricidade", "Rebeldia"],
    "Peixes": ["Escapismo", "Confusão", "Autosacrifício"]
  };
  
  // Add challenges based on personality traits
  let additionalChallenges: string[] = [];
  if (traits.includes("extrovertido")) additionalChallenges.push("Dificuldade com momentos de solidão");
  if (traits.includes("introspectivo")) additionalChallenges.push("Comunicação das emoções");
  if (traits.includes("racional")) additionalChallenges.push("Reconhecer sentimentos");
  if (traits.includes("intuitivo")) additionalChallenges.push("Tomar decisões baseadas em fatos");
  if (traits.includes("criativo")) additionalChallenges.push("Foco em detalhes práticos");
  if (traits.includes("leal")) additionalChallenges.push("Estabelecer limites saudáveis");
  
  // Combine and return unique challenges
  return [...baseChallenges[sign], ...additionalChallenges].slice(0, 5);
}

function getCompatibilityByZodiac(sign: string): string[] {
  const compatibilities: Record<string, string[]> = {
    "Áries": ["Leão", "Sagitário", "Gêmeos", "Aquário"],
    "Touro": ["Virgem", "Capricórnio", "Câncer", "Peixes"],
    "Gêmeos": ["Libra", "Aquário", "Áries", "Leão"],
    "Câncer": ["Escorpião", "Peixes", "Touro", "Virgem"],
    "Leão": ["Áries", "Sagitário", "Gêmeos", "Libra"],
    "Virgem": ["Touro", "Capricórnio", "Câncer", "Escorpião"],
    "Libra": ["Gêmeos", "Aquário", "Leão", "Sagitário"],
    "Escorpião": ["Câncer", "Peixes", "Virgem", "Capricórnio"],
    "Sagitário": ["Áries", "Leão", "Libra", "Aquário"],
    "Capricórnio": ["Touro", "Virgem", "Escorpião", "Peixes"],
    "Aquário": ["Gêmeos", "Libra", "Áries", "Sagitário"],
    "Peixes": ["Câncer", "Escorpião", "Touro", "Capricórnio"]
  };
  
  return compatibilities[sign] || [];
}
