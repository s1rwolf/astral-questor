
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ResultsDisplay from '../components/ResultsDisplay';
import { QuizResult } from '../utils/quizUtils';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

const Results = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState<QuizResult | null>(null);
  const [shareUrl, setShareUrl] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [isPremiumModalOpen, setIsPremiumModalOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null);
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: ''
  });

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

  const handlePremiumModalOpen = () => {
    setIsPremiumModalOpen(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedPhoto(e.target.files[0]);
    }
  };

  const handleProceedToCheckout = () => {
    setIsPremiumModalOpen(false);
    setIsCheckoutModalOpen(true);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would process the payment here
    // For this demo, we'll just simulate a successful payment
    
    toast.success("Pagamento processado com sucesso!", {
      description: "Você agora tem acesso à versão premium do seu mapa astral."
    });
    
    setIsCheckoutModalOpen(false);
    
    // Simulate processing time for AI analysis
    setLoading(true);
    setTimeout(() => {
      // In a real app, you'd update the user's account and result data
      if (result) {
        const enhancedResult = {
          ...result,
          isPremium: true,
          futureAnalysis: "Nos próximos meses, você passará por uma transformação significativa em sua carreira. Novas oportunidades surgirão inesperadamente, trazendo crescimento financeiro e realização pessoal. Seus relacionamentos florescerão com uma comunicação mais aberta e sincera.",
          clientPhoto: selectedPhoto ? URL.createObjectURL(selectedPhoto) : null
        };
        
        setResult(enhancedResult);
        localStorage.setItem('astralQuizResult', JSON.stringify(enhancedResult));
      }
      setLoading(false);
    }, 3000);
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    
    // Limit to 16 digits and add spaces for readability
    if (value.length > 16) value = value.slice(0, 16);
    
    // Format with spaces
    let formattedValue = '';
    for (let i = 0; i < value.length; i += 4) {
      formattedValue += value.slice(i, i + 4) + (i < 12 ? ' ' : '');
    }
    
    setCardDetails({...cardDetails, number: formattedValue.trim()});
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    
    // Limit to 4 digits (MMYY)
    if (value.length > 4) value = value.slice(0, 4);
    
    // Format as MM/YY
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }
    
    setCardDetails({...cardDetails, expiry: value});
  };

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
                
                <ResultsDisplay 
                  result={result} 
                  shareUrl={shareUrl} 
                  onPremiumClick={handlePremiumModalOpen}
                />
                
                <div className="mt-16 text-center">
                  <h3 className="text-2xl font-semibold text-white mb-4">Quer uma Análise Mais Profunda?</h3>
                  <p className="text-space-300 max-w-2xl mx-auto mb-8">
                    Desbloqueie a versão premium do seu mapa astral para acessar previsões detalhadas, 
                    análises de compatibilidade avançadas e orientações personalizadas para diferentes 
                    áreas da sua vida.
                  </p>
                  <button className="cosmic-button text-lg" onClick={handlePremiumModalOpen}>
                    Acessar Versão Premium
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </main>
      
      {/* Premium Features Modal */}
      <Dialog open={isPremiumModalOpen} onOpenChange={setIsPremiumModalOpen}>
        <DialogContent className="celestial-card max-w-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-cosmic-400">Versão Premium</DialogTitle>
            <DialogDescription className="text-space-300 mt-2">
              Desbloqueie recursos exclusivos e uma análise mais profunda do seu mapa astral.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-6 py-4">
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-white">O que você recebe:</h4>
              
              <Card className="celestial-card border-cosmic-700/20">
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-cosmic-400 mr-2">✦</span>
                      <span className="text-space-300">Previsões personalizadas para os próximos 6 meses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cosmic-400 mr-2">✦</span>
                      <span className="text-space-300">Análise de compatibilidade com outros signos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cosmic-400 mr-2">✦</span>
                      <span className="text-space-300">Orientações para maximizar seus pontos fortes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cosmic-400 mr-2">✦</span>
                      <span className="text-space-300">Dicas personalizadas para superar seus desafios</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cosmic-400 mr-2">✦</span>
                      <span className="text-space-300">Análise com IA usando sua foto para insights aprofundados</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <div className="pt-2">
                <Label htmlFor="photo-upload" className="cosmic-label">Envie sua foto para análise personalizada (opcional)</Label>
                <Input 
                  id="photo-upload" 
                  type="file" 
                  accept="image/*" 
                  onChange={handleFileChange}
                  className="cosmic-input mt-1" 
                />
                {selectedPhoto && (
                  <div className="mt-3 flex justify-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-cosmic-500">
                      <img 
                        src={URL.createObjectURL(selectedPhoto)} 
                        alt="Preview" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-2">
              <div className="text-white">
                <span className="text-2xl font-bold">R$29,90</span>
                <span className="text-space-400 text-sm ml-2">pagamento único</span>
              </div>
              <Button 
                onClick={handleProceedToCheckout}
                className="cosmic-button"
              >
                Continuar para pagamento
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Checkout Modal */}
      <Dialog open={isCheckoutModalOpen} onOpenChange={setIsCheckoutModalOpen}>
        <DialogContent className="celestial-card max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-cosmic-400">Finalizar Compra</DialogTitle>
            <DialogDescription className="text-space-300 mt-2">
              Preencha os dados do cartão para acessar a versão premium.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handlePaymentSubmit} className="space-y-6 py-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="card-number" className="cosmic-label">Número do Cartão</Label>
                <Input 
                  id="card-number"
                  value={cardDetails.number}
                  onChange={handleCardNumberChange}
                  placeholder="0000 0000 0000 0000"
                  className="cosmic-input"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="card-holder" className="cosmic-label">Nome no Cartão</Label>
                <Input 
                  id="card-holder"
                  value={cardDetails.name}
                  onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                  placeholder="Nome completo"
                  className="cosmic-input"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry" className="cosmic-label">Validade</Label>
                  <Input 
                    id="expiry"
                    value={cardDetails.expiry}
                    onChange={handleExpiryChange}
                    placeholder="MM/AA"
                    className="cosmic-input"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="cvc" className="cosmic-label">CVC</Label>
                  <Input 
                    id="cvc"
                    value={cardDetails.cvc}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '');
                      if (value.length <= 3) {
                        setCardDetails({...cardDetails, cvc: value});
                      }
                    }}
                    placeholder="123"
                    className="cosmic-input"
                    required
                    maxLength={3}
                  />
                </div>
              </div>
            </div>
            
            <DialogFooter>
              <div className="w-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-space-300">Total:</span>
                  <span className="text-2xl font-bold text-white">R$29,90</span>
                </div>
                
                <Button type="submit" className="w-full cosmic-button">
                  Pagar Agora
                </Button>
                
                <p className="text-center text-space-400 text-xs mt-4">
                  Pagamento 100% seguro. Seus dados estão protegidos.
                </p>
              </div>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </>
  );
};

export default Results;
