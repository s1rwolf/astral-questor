
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <div className="stars-container"></div>
      <Navbar />
      
      <main className="pt-28 pb-20 min-h-screen">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Sobre o AstralQuiz
          </h1>
          
          <div className="max-w-3xl mx-auto">
            <div className="celestial-card p-8 mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Nossa Missão</h2>
              <p className="text-space-300 mb-6">
                O AstralQuiz nasceu da paixão por tornar o conhecimento astrológico acessível e 
                significativo para todos. Nossa missão é criar uma ponte entre a sabedoria milenar 
                da astrologia e a tecnologia moderna, oferecendo insights personalizados que 
                ajudam as pessoas a compreenderem melhor a si mesmas e suas relações.
              </p>
              <p className="text-space-300">
                Acreditamos que a astrologia pode ser uma ferramenta poderosa de autoconhecimento, 
                ajudando a iluminar padrões, potenciais e desafios em nossas vidas. Nosso objetivo 
                é apresentar essas informações de forma clara, acessível e livre de jargões 
                complexos, para que todos possam se beneficiar desse conhecimento ancestral.
              </p>
            </div>
            
            <div className="celestial-card p-8 mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">A Ciência por Trás do AstralQuiz</h2>
              <p className="text-space-300 mb-6">
                Nosso sistema combina princípios tradicionais da astrologia com análise moderna de 
                dados para criar perfis astrológicos personalizados. Utilizamos cálculos astronômicos 
                precisos para determinar as posições exatas dos planetas no momento do seu nascimento, 
                e integramos essas informações com suas respostas ao nosso quiz de personalidade.
              </p>
              <p className="text-space-300">
                O resultado é uma análise que vai além do simples "signo solar", considerando a 
                complexa interação entre diversos elementos do seu mapa astral, como ascendente, 
                posições planetárias, casas astrológicas e aspectos. Tudo isso é traduzido em 
                linguagem clara e relevante para o seu dia a dia.
              </p>
            </div>
            
            <div className="celestial-card p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Nossa Equipe</h2>
              <p className="text-space-300 mb-6">
                O AstralQuiz é desenvolvido por uma equipe multidisciplinar que combina especialistas 
                em astrologia, desenvolvedores de software, designers de experiência do usuário e 
                especialistas em linguagem natural.
              </p>
              <p className="text-space-300">
                Estamos constantemente atualizando e refinando nossos algoritmos e interpretações 
                com base em pesquisas astrológicas atualizadas e feedback dos usuários, buscando 
                sempre oferecer a experiência mais precisa e útil possível.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default About;
