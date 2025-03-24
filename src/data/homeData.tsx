
import { FeatureItem, ProcessStep, Testimonial } from '../types/home';

export const features: FeatureItem[] = [
  {
    title: "Análise Personalizada",
    description: "Interpretação única baseada em seus dados astrológicos e respostas ao quiz.",
    icon: (
      <div className="w-12 h-12 rounded-full bg-cosmic-700/30 flex items-center justify-center mb-4">
        <svg className="w-6 h-6 text-cosmic-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      </div>
    )
  },
  {
    title: "Compatibilidade Astrológica",
    description: "Descubra quais signos são mais compatíveis com seu perfil astral.",
    icon: (
      <div className="w-12 h-12 rounded-full bg-cosmic-700/30 flex items-center justify-center mb-4">
        <svg className="w-6 h-6 text-cosmic-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </div>
    )
  },
  {
    title: "Previsões Futuras",
    description: "Compreenda tendências e energias que podem influenciar seu caminho.",
    icon: (
      <div className="w-12 h-12 rounded-full bg-cosmic-700/30 flex items-center justify-center mb-4">
        <svg className="w-6 h-6 text-cosmic-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    )
  },
  {
    title: "Compartilhamento Fácil",
    description: "Compartilhe sua análise via QR Code ou redes sociais com amigos e família.",
    icon: (
      <div className="w-12 h-12 rounded-full bg-cosmic-700/30 flex items-center justify-center mb-4">
        <svg className="w-6 h-6 text-cosmic-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      </div>
    )
  }
];

export const process: ProcessStep[] = [
  {
    step: "1",
    title: "Complete o Quiz",
    description: "Responda perguntas simples sobre sua personalidade e preferências."
  },
  {
    step: "2",
    title: "Informe seus Dados",
    description: "Forneça sua data, hora e local de nascimento para cálculos precisos."
  },
  {
    step: "3",
    title: "Receba sua Análise",
    description: "Obtenha um relatório personalizado baseado em seu perfil astrológico."
  },
  {
    step: "4",
    title: "Compartilhe & Explore",
    description: "Compartilhe seus resultados e explore análises mais detalhadas."
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Ana C.",
    text: "A análise foi surpreendentemente precisa! Me identifico com todas as características descritas, e as previsões têm me ajudado a tomar decisões mais conscientes.",
    avatar: "A"
  },
  {
    name: "Rafael M.",
    text: "Sempre fui cético sobre astrologia, mas o relatório gerado pelo AstralQuiz me impressionou pela profundidade e relevância. Recomendo a todos!",
    avatar: "R"
  },
  {
    name: "Juliana T.",
    text: "A interface é linda e intuitiva. O que mais gostei foi a facilidade de compartilhar meus resultados com amigos através do QR code.",
    avatar: "J"
  }
];
