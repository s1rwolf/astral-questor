
import { useEffect } from 'react';

const StarBackground = () => {
  useEffect(() => {
    const createStars = () => {
      const starsContainer = document.querySelector('.stars-container');
      if (!starsContainer) return;
      
      // Limpar estrelas existentes
      starsContainer.innerHTML = '';
      
      // Criar muito mais estrelas
      for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random positioning
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        
        // Random size - algumas maiores para dar mais profundidade
        const size = `${0.5 + Math.random() * (Math.random() > 0.95 ? 3 : 1.5)}px`;
        star.style.width = size;
        star.style.height = size;
        
        // Random animation duration and delay
        star.style.setProperty('--twinkle-duration', `${3 + Math.random() * 5}s`);
        star.style.setProperty('--twinkle-delay', `${Math.random() * 5}s`);
        
        // Adicionar algumas estrelas com brilho especial
        if (Math.random() > 0.9) {
          star.style.boxShadow = '0 0 4px 1px rgba(255, 255, 255, 0.4)';
          star.style.backgroundColor = Math.random() > 0.5 ? '#f9f9ff' : '#fffcf0';
        }
        
        starsContainer.appendChild(star);
      }
      
      // Adicionar algumas estrelas cadentes ocasionalmente
      const createShootingStar = () => {
        if (!starsContainer) return;
        
        const shootingStar = document.createElement('div');
        shootingStar.classList.add('shooting-star');
        
        // Posição e ângulo aleatórios
        shootingStar.style.top = `${Math.random() * 50}%`;
        shootingStar.style.left = `${Math.random() * 70}%`;
        shootingStar.style.setProperty('--angle', `${200 + Math.random() * 50}deg`);
        
        starsContainer.appendChild(shootingStar);
        
        // Remover a estrela cadente após a animação
        setTimeout(() => {
          shootingStar.remove();
        }, 2000);
      };
      
      // Criar estrela cadente a cada 5-15 segundos
      setInterval(createShootingStar, 5000 + Math.random() * 10000);
    };

    createStars();
    
    // Recriar estrelas ao redimensionar
    window.addEventListener('resize', createStars);
    
    return () => {
      window.removeEventListener('resize', createStars);
    };
  }, []);

  return (
    <div className="stars-container fixed inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
      {/* Estrelas são criadas dinamicamente via JavaScript */}
      <style jsx="true">{`
        @keyframes shooting {
          0% {
            transform: translateX(0) translateY(0) rotate(var(--angle));
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateX(400px) translateY(300px) rotate(var(--angle));
            opacity: 0;
          }
        }
        
        .shooting-star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: linear-gradient(90deg, rgba(255,255,255,0), #fff 50%, rgba(255,255,255,0));
          border-radius: 50%;
          animation: shooting 2s ease-out forwards;
          z-index: 10;
          box-shadow: 0 0 5px 1px white;
        }
        
        .shooting-star::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          width: 100px;
          height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.8));
          transform: translateY(-50%);
        }
      `}</style>
    </div>
  );
};

export default StarBackground;
