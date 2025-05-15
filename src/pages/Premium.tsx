
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { QuizResult } from '../utils/quizUtils';
import { Badge } from '@/components/ui/badge';
import { Star, Calendar, Sparkles, Brain, Heart, Briefcase, Compass, MessageCircle, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';

const Premium = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState<QuizResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<{type: 'user' | 'assistant', content: string}[]>([
    {type: 'assistant', content: 'Olá! Sou Venus, sua guia astrológica. Como posso ajudar você hoje?'}
  ]);
  const [sendingMessage, setSendingMessage] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Recuperar o resultado do localStorage
    const storedResult = localStorage.getItem('astralQuizResult');
    
    if (storedResult) {
      const parsedResult = JSON.parse(storedResult);
      // Verificar se já é premium
      if (parsedResult.isPremium) {
        setResult(parsedResult);
        setLoading(false);
      } else {
        // Redirecionar para a página de resultados para upgrade
        navigate('/results');
      }
    } else {
      // Se não houver resultado, redirecionar para o quiz
      navigate('/quiz');
    }
  }, [navigate]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    
    setSendingMessage(true);
    
    // Adicionar mensagem do usuário ao chat
    const userMessage = message;
    setChatMessages(prev => [...prev, {type: 'user', content: userMessage}]);
    setMessage('');
    
    try {
      // Enviar mensagem para o webhook
      const response = await fetch('https://n8n-n8n.j7puxu.easypanel.host/webhook/venus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors', // Para evitar problemas de CORS
        body: JSON.stringify({
          message: userMessage,
          user: result?.name || 'Usuário Premium',
          birthData: result?.birthData,
          sign: result?.sign,
          timestamp: new Date().toISOString()
        }),
      });
      
      // Como estamos usando no-cors, não podemos verificar o status da resposta
      // Simular uma resposta do assistente após um pequeno delay
      setTimeout(() => {
        const responses = [
          "Entendo sua questão sobre o futuro. Seus astros indicam mudanças positivas nos próximos meses.",
          "Observo em seu mapa astral que você está em um período de transformação importante.",
          "Venus está em trânsito na sua casa da intuição. Confie mais nos seus instintos neste momento.",
          "As conjunções astrais deste mês favorecem decisões relacionadas à sua pergunta.",
          "Interessante questão! Seu ascendente sugere que você deve considerar novas perspectivas."
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        setChatMessages(prev => [...prev, {type: 'assistant', content: randomResponse}]);
        setSendingMessage(false);
      }, 1500);
      
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      toast({
        title: "Erro na comunicação",
        description: "Não foi possível enviar sua mensagem. Tente novamente mais tarde.",
        variant: "destructive",
      });
      setSendingMessage(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="relative w-16 h-16 mb-8">
          <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full border-4 border-cosmic-600/20 border-t-cosmic-400 animate-spin"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cosmic-400"></div>
        </div>
        <h2 className="text-2xl font-semibold text-white">Carregando seu perfil premium...</h2>
      </div>
    );
  }

  return (
    <>
      <div className="stars-container"></div>
      <Navbar />
      
      <main className="pt-28 pb-20 min-h-screen">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <Badge className="bg-cosmic-600 mb-4">Premium</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Seu Mapa Astral Premium
            </h1>
            <p className="text-space-300 text-xl max-w-2xl mx-auto">
              Análise personalizada com recursos exclusivos baseados no seu perfil astrológico.
            </p>
          </div>

          {result && (
            <Tabs defaultValue="main" className="w-full max-w-5xl mx-auto">
              <TabsList className="grid grid-cols-2 md:grid-cols-8 mb-8">
                <TabsTrigger value="main" className="data-[state=active]:bg-cosmic-600">Principal</TabsTrigger>
                <TabsTrigger value="cycles" className="data-[state=active]:bg-cosmic-600">Ciclos</TabsTrigger>
                <TabsTrigger value="lessons" className="data-[state=active]:bg-cosmic-600">Lições</TabsTrigger>
                <TabsTrigger value="purpose" className="data-[state=active]:bg-cosmic-600">Propósito</TabsTrigger>
                <TabsTrigger value="relationships" className="data-[state=active]:bg-cosmic-600">Relacionamentos</TabsTrigger>
                <TabsTrigger value="career" className="data-[state=active]:bg-cosmic-600">Carreira</TabsTrigger>
                <TabsTrigger value="forecast" className="data-[state=active]:bg-cosmic-600">Previsões</TabsTrigger>
                <TabsTrigger value="chat" className="data-[state=active]:bg-cosmic-600">Chat com Venus</TabsTrigger>
              </TabsList>
              
              <TabsContent value="main" className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="celestial-card">
                    <CardHeader>
                      <CardTitle className="flex items-center text-white">
                        <Star className="mr-2 text-cosmic-400" size={20} />
                        Análise do Futuro
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-space-300">{result.futureAnalysis}</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="celestial-card">
                    <CardHeader>
                      <CardTitle className="flex items-center text-white">
                        <Sparkles className="mr-2 text-cosmic-400" size={20} />
                        Numerologia Pessoal
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-space-300">{result.personalNumerology}</p>
                    </CardContent>
                  </Card>
                </div>
                
                {result.clientPhoto && (
                  <div className="mt-8 flex flex-col items-center">
                    <h3 className="text-xl font-medium text-white mb-4">Sua Análise Personalizada</h3>
                    <div className="celestial-card p-6 max-w-2xl">
                      <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-cosmic-500">
                          <img 
                            src={result.clientPhoto} 
                            alt="Sua foto" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-space-300 mb-4">
                            Baseado na energia que sua imagem transmite, nossa análise indica 
                            que você possui uma forte aura de {Math.random() > 0.5 ? "criatividade e expressão" : "intuição e sensibilidade"}.
                            Isso se alinha perfeitamente com as características do seu mapa astral.
                          </p>
                          <Button className="cosmic-button" onClick={() => navigate('/results')}>
                            Voltar para Resultados
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="cycles" className="animate-fade-in">
                <Card className="celestial-card">
                  <CardHeader>
                    <CardTitle className="text-white">
                      <div className="flex items-center">
                        <Calendar className="mr-2 text-cosmic-400" size={20} />
                        Ciclos de Influência
                      </div>
                    </CardTitle>
                    <CardDescription>
                      Períodos de energia específica que afetarão sua vida nos próximos meses
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {result.influenceCycles?.map((cycle, index) => (
                        <div key={index} className="celestial-card p-4 border-cosmic-500/30">
                          <h4 className="text-lg font-medium text-cosmic-400 mb-1">{cycle.cycle}</h4>
                          <div className="flex justify-between mb-2">
                            <span className="text-space-400 text-sm">Duração: {cycle.duration}</span>
                          </div>
                          <p className="text-space-300">{cycle.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="lessons" className="animate-fade-in">
                <Card className="celestial-card">
                  <CardHeader>
                    <CardTitle className="text-white">
                      <div className="flex items-center">
                        <Brain className="mr-2 text-cosmic-400" size={20} />
                        Lições Kármicas
                      </div>
                    </CardTitle>
                    <CardDescription>
                      Aprendizados importantes para sua evolução espiritual
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {result.karmaticLessons?.map((lesson, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-8 h-8 bg-cosmic-700/30 rounded-full flex items-center justify-center mr-3 shrink-0">
                            <span className="text-cosmic-300">{index + 1}</span>
                          </div>
                          <p className="text-space-300">{lesson}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="purpose" className="animate-fade-in">
                <Card className="celestial-card">
                  <CardHeader>
                    <CardTitle className="text-white">
                      <div className="flex items-center">
                        <Compass className="mr-2 text-cosmic-400" size={20} />
                        Propósito da Alma
                      </div>
                    </CardTitle>
                    <CardDescription>
                      Sua missão de vida de acordo com seu mapa astral
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="p-6 text-center space-y-6">
                      <div className="cosmic-glow w-20 h-20 mx-auto rounded-full bg-cosmic-700/30 flex items-center justify-center">
                        <Sparkles className="text-cosmic-300" size={32} />
                      </div>
                      <p className="text-space-300 text-lg">{result.soulPurpose}</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="relationships" className="animate-fade-in">
                <Card className="celestial-card">
                  <CardHeader>
                    <CardTitle className="text-white">
                      <div className="flex items-center">
                        <Heart className="mr-2 text-cosmic-400" size={20} />
                        Previsões de Relacionamentos
                      </div>
                    </CardTitle>
                    <CardDescription>
                      Como serão seus relacionamentos nos próximos meses
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {result.relationshipPredictions?.map((relation, index) => (
                        <div key={index} className="celestial-card p-4">
                          <h4 className="text-lg font-medium text-cosmic-400 mb-2">{relation.area}</h4>
                          <p className="text-space-300">{relation.prediction}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="career" className="animate-fade-in">
                <Card className="celestial-card">
                  <CardHeader>
                    <CardTitle className="text-white">
                      <div className="flex items-center">
                        <Briefcase className="mr-2 text-cosmic-400" size={20} />
                        Orientação de Carreira
                      </div>
                    </CardTitle>
                    <CardDescription>
                      Insights para seu crescimento profissional
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="p-6">
                      <p className="text-space-300 mb-6">{result.careerGuidance}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                        <div className="celestial-card p-4 text-center">
                          <h5 className="text-cosmic-400 font-medium mb-2">Pontos Fortes</h5>
                          <p className="text-space-300">Comunicação e criatividade</p>
                        </div>
                        <div className="celestial-card p-4 text-center">
                          <h5 className="text-cosmic-400 font-medium mb-2">Áreas de Desenvolvimento</h5>
                          <p className="text-space-300">Organização e planejamento</p>
                        </div>
                        <div className="celestial-card p-4 text-center">
                          <h5 className="text-cosmic-400 font-medium mb-2">Oportunidades</h5>
                          <p className="text-space-300">Projetos colaborativos</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="forecast" className="animate-fade-in">
                <Card className="celestial-card">
                  <CardHeader>
                    <CardTitle className="text-white">
                      <div className="flex items-center">
                        <Calendar className="mr-2 text-cosmic-400" size={20} />
                        Previsões Mensais
                      </div>
                    </CardTitle>
                    <CardDescription>
                      O que esperar nos próximos meses com base no seu mapa astral
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {result.monthlyForecast?.map((month, index) => (
                        <div key={index} className="celestial-card p-4">
                          <h4 className="text-lg font-medium text-cosmic-400 mb-2">{month.month}</h4>
                          <p className="text-space-300">{month.forecast}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center pt-4">
                    <Button 
                      className="cosmic-button"
                      onClick={() => navigate('/results')}
                    >
                      Voltar para Resultados
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="chat" className="animate-fade-in">
                <Card className="celestial-card">
                  <CardHeader>
                    <CardTitle className="text-white">
                      <div className="flex items-center">
                        <MessageCircle className="mr-2 text-cosmic-400" size={20} />
                        Chat com Venus
                      </div>
                    </CardTitle>
                    <CardDescription>
                      Converse diretamente com sua guia astrológica e obtenha insights personalizados
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col h-[400px]">
                      <ScrollArea className="flex-1 mb-4 pr-4">
                        <div className="space-y-4">
                          {chatMessages.map((msg, index) => (
                            <div 
                              key={index} 
                              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                              <div 
                                className={`max-w-[80%] p-3 rounded-2xl ${
                                  msg.type === 'user' 
                                    ? 'bg-cosmic-600 text-white' 
                                    : 'bg-cosmic-800/50 border border-cosmic-700/50'
                                }`}
                              >
                                <p className={`text-sm ${msg.type === 'user' ? 'text-white' : 'text-space-200'}`}>
                                  {msg.content}
                                </p>
                              </div>
                            </div>
                          ))}
                          {sendingMessage && (
                            <div className="flex justify-start">
                              <div className="max-w-[80%] p-3 rounded-2xl bg-cosmic-800/50 border border-cosmic-700/50">
                                <div className="flex space-x-2">
                                  <div className="w-2 h-2 bg-cosmic-400 rounded-full animate-pulse"></div>
                                  <div className="w-2 h-2 bg-cosmic-400 rounded-full animate-pulse delay-150"></div>
                                  <div className="w-2 h-2 bg-cosmic-400 rounded-full animate-pulse delay-300"></div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </ScrollArea>
                      
                      <div className="flex gap-2">
                        <Input 
                          value={message} 
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Pergunte à Venus sobre seu destino..."
                          className="bg-cosmic-900/50 border-cosmic-700 text-space-200 placeholder:text-space-500"
                          onKeyPress={(e) => {
                            if (e.key === 'Enter' && !sendingMessage) {
                              handleSendMessage();
                            }
                          }}
                        />
                        <Button 
                          onClick={handleSendMessage} 
                          disabled={sendingMessage || !message.trim()} 
                          className="cosmic-button flex items-center"
                        >
                          <Send size={16} className="mr-1" />
                          Enviar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Premium;
