
import { useEffect } from 'react';

const StarBackground = () => {
  useEffect(() => {
    const createStars = () => {
      const starsContainer = document.querySelector('.stars-container');
      if (!starsContainer) return;
      
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random positioning
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        
        // Random size
        const size = `${0.5 + Math.random() * 1.5}px`;
        star.style.width = size;
        star.style.height = size;
        
        // Random animation duration and delay
        star.style.setProperty('--twinkle-duration', `${3 + Math.random() * 4}s`);
        star.style.setProperty('--twinkle-delay', `${Math.random() * 5}s`);
        
        starsContainer.appendChild(star);
      }
    };

    createStars();
  }, []);

  return <div className="stars-container"></div>;
};

export default StarBackground;
