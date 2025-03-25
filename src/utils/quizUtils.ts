
export interface QuizResult {
  summary: string;
  details: {
    [key: string]: string;
  };
  compatibility: string[];
  strengths: string[];
  challenges: string[];
  // Premium features
  isPremium?: boolean;
  futureAnalysis?: string;
  clientPhoto?: string | null;
}

export interface BirthData {
  day: number;
  month: number;
  year: number;
  hour: number;
  minute: number;
  city: string;
  zodiacSign?: string | null;
}

export interface QuizAnswers {
  [questionId: number]: string;
}

export const quizQuestions = [
  {
    id: 1,
    text: "Como você costuma reagir quando está sob estresse?",
    options: [
      "Fico irritado e impaciente",
      "Me isolo e reflito sozinho",
      "Busco conselhos com amigos",
      "Encontro maneiras criativas de me acalmar"
    ]
  },
  {
    id: 2,
    text: "Em uma festa, você geralmente:",
    options: [
      "É o centro das atenções",
      "Conversa com poucas pessoas que já conhece",
      "Faz novas amizades facilmente",
      "Observa os outros de longe"
    ]
  },
  {
    id: 3,
    text: "Qual destes elementos mais te atrai?",
    options: [
      "Fogo",
      "Terra",
      "Ar",
      "Água"
    ]
  },
  {
    id: 4,
    text: "Como você toma decisões importantes?",
    options: [
      "Confio na minha intuição",
      "Analiso todos os fatos e detalhes",
      "Considero os sentimentos de todos os envolvidos",
      "Procuro conselhos externos"
    ]
  },
  {
    id: 5,
    text: "Qual destas estações mais combina com você?",
    options: [
      "Verão",
      "Outono",
      "Primavera",
      "Inverno"
    ]
  }
];

export const generateQuizResult = (answers: QuizAnswers, birthData: BirthData): QuizResult => {
  // Aqui seria implementada lógica real baseada nas respostas e dados de nascimento
  // Para demonstração, vamos criar um resultado simulado baseado no signo
  
  const zodiacSign = birthData.zodiacSign || getZodiacSignFromBirthDate(birthData.day, birthData.month);
  
  // Resultados personalizados por signo (simplificado)
  const results: Record<string, Partial<QuizResult>> = {
    "Áries": {
      summary: "Seu perfil astrológico revela uma personalidade dinâmica e corajosa. Como um ariano, você tem uma energia inesgotável e um espírito pioneiro.",
      details: {
        "Personalidade": "Você é conhecido por sua natureza determinada e assertiva. Tende a ser direto e não tem medo de iniciar novos projetos.",
        "Relacionamentos": "Em relacionamentos, você valoriza a independência e busca parceiros que respeitem seu espaço, mas também apreciem sua lealdade feroz.",
        "Carreira": "Profissionalmente, você se destaca em ambientes competitivos onde pode exercer liderança e tomar iniciativas."
      },
      compatibility: ["Leão", "Sagitário", "Gêmeos"],
      strengths: ["Coragem", "Determinação", "Entusiasmo", "Confiança"],
      challenges: ["Impaciência", "Impulsividade", "Tendência à teimosia"]
    },
    "Touro": {
      summary: "Seu perfil astrológico mostra uma personalidade estável e prática. Como taurino, você valoriza segurança e conforto material.",
      details: {
        "Personalidade": "Você é conhecido por sua natureza paciente e determinada. Tende a ser realista e aprecia prazeres sensoriais.",
        "Relacionamentos": "Em relacionamentos, você é leal e busca conexões duradouras. Valoriza parceiros que ofereçam estabilidade e afeto consistente.",
        "Carreira": "Profissionalmente, você se destaca em carreiras que exigem persistência e habilidades práticas. Tem talento para finanças."
      },
      compatibility: ["Virgem", "Capricórnio", "Câncer"],
      strengths: ["Determinação", "Confiabilidade", "Paciência", "Apreciação pela beleza"],
      challenges: ["Teimosia", "Resistência à mudança", "Possessividade"]
    },
    "Gêmeos": {
      summary: "Seu perfil astrológico indica uma personalidade versátil e comunicativa. Como geminiano, você tem curiosidade intelectual e adaptabilidade.",
      details: {
        "Personalidade": "Você é conhecido por sua natureza expressiva e ágil mentalmente. Tende a ser sociável e gosta de variedade.",
        "Relacionamentos": "Em relacionamentos, você busca estimulação mental e boa comunicação. Aprecia parceiros que acompanhem seu ritmo de ideias.",
        "Carreira": "Profissionalmente, você se destaca em ambientes que envolvem comunicação, multitarefas e aprendizado constante."
      },
      compatibility: ["Libra", "Aquário", "Áries"],
      strengths: ["Adaptabilidade", "Comunicação", "Inteligência", "Curiosidade"],
      challenges: ["Inconstância", "Dispersão", "Dificuldade com compromissos longos"]
    },
    // Adicionar outros signos...
    "default": {
      summary: "Seu perfil astrológico revela uma personalidade rica e multifacetada, com características únicas que o destacam.",
      details: {
        "Personalidade": "Você tem uma natureza complexa que combina diferentes elementos. Seu caráter é moldado tanto por influências astrais quanto por suas escolhas conscientes.",
        "Relacionamentos": "Em relacionamentos, você busca equilíbrio entre dar e receber, criando conexões que respeitam sua individualidade.",
        "Carreira": "Profissionalmente, você tem potencial para se destacar quando encontra um campo que ressoa com seus valores pessoais."
      },
      compatibility: ["Libra", "Gêmeos", "Aquário"],
      strengths: ["Autoconhecimento", "Adaptabilidade", "Percepção", "Resiliência"],
      challenges: ["Autocobrança", "Tendência a complexificar situações", "Instabilidade emocional ocasional"]
    }
  };
  
  // Use o resultado baseado no signo ou o default se o signo não for encontrado
  const baseResult = results[zodiacSign || "default"] || results["default"];
  
  return {
    summary: baseResult.summary || results["default"].summary!,
    details: baseResult.details || results["default"].details!,
    compatibility: baseResult.compatibility || results["default"].compatibility!,
    strengths: baseResult.strengths || results["default"].strengths!,
    challenges: baseResult.challenges || results["default"].challenges!
  };
};

export const generateShareableUrl = (birthData: BirthData): string => {
  // Em uma aplicação real, você criaria um ID único para o resultado 
  // e o armazenaria em um banco de dados para compartilhamento
  
  // Para este exemplo, vamos criar um URL simulado
  const birthDateEncoded = btoa(JSON.stringify({
    day: birthData.day,
    month: birthData.month,
    year: birthData.year,
    sign: birthData.zodiacSign
  }));
  
  return `https://astralmap.example.com/share/${birthDateEncoded}`;
};

// Função auxiliar para determinar o signo baseado na data de nascimento
const getZodiacSignFromBirthDate = (day: number, month: number): string => {
  // Datas aproximadas dos signos do zodíaco
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Áries";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Touro";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gêmeos";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Câncer";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leão";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgem";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Escorpião";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagitário";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricórnio";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquário";
  return "Peixes"; // (month === 2 && day >= 19) || (month === 3 && day <= 20)
};
