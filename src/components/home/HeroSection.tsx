
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  isVisible: boolean;
}

const HeroSection = ({ isVisible }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 pb-16">
      <div className="cosmic-glow absolute inset-0 -z-10"></div>
      
      <div 
        className={`container mx-auto px-6 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="mb-8 inline-block">
          <div className="relative inline-block animate-star-float">
            <svg className="w-16 h-16 text-cosmic-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1.057l2.53 7.797h8.195l-6.628 4.821 2.53 7.797-6.628-4.821-6.628 4.821 2.53-7.797-6.628-4.821h8.195z" />
            </svg>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Descubra seu <span className="text-cosmic-400">Mapa Astral</span> <br />
          através de um Quiz
        </h1>
        
        <p className="text-xl text-space-300 max-w-3xl mx-auto mb-10">
          Responda algumas perguntas simples e desvende os segredos que os astros
          revelam sobre sua personalidade, relacionamentos e caminho de vida.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/quiz" className="cosmic-button text-lg">
            Iniciar Quiz
          </Link>
          <a href="#como-funciona" className="px-6 py-3 bg-space-800 hover:bg-space-700 text-white rounded-full transition-all duration-300 text-lg">
            Saiba Mais
          </a>
        </div>
        
        <div className="mt-16 py-4 px-6 rounded-xl bg-space-900/50 backdrop-blur-md inline-block">
          <p className="text-space-400">
            <span className="text-cosmic-300">✨</span> Mais de 10.000 pessoas já descobriram seus mapas astrais
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#features" className="text-space-400 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
