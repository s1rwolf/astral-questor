
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ZodiacBackground from '../components/ZodiacBackground';
import StarBackground from '../components/home/StarBackground';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import ProcessSection from '../components/home/ProcessSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { features, process, testimonials } from '../data/homeData';

const Index = () => {
  // Section refs for intersection observer
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  // Check if sections are visible
  const isHeroVisible = useIntersectionObserver({ ref: heroRef });
  const isFeaturesVisible = useIntersectionObserver({ ref: featuresRef });
  const isProcessVisible = useIntersectionObserver({ ref: processRef });
  const isTestimonialsVisible = useIntersectionObserver({ ref: testimonialsRef });
  const isCtaVisible = useIntersectionObserver({ ref: ctaRef });
  
  return (
    <div className="relative min-h-screen">
      <StarBackground />
      <ZodiacBackground />
      <Navbar />
      
      <main>
        <div ref={heroRef}>
          <HeroSection isVisible={isHeroVisible} />
        </div>
        
        <div ref={featuresRef}>
          <FeaturesSection features={features} isVisible={isFeaturesVisible} />
        </div>
        
        <div ref={processRef}>
          <ProcessSection process={process} isVisible={isProcessVisible} />
        </div>
        
        <div ref={testimonialsRef}>
          <TestimonialsSection testimonials={testimonials} isVisible={isTestimonialsVisible} />
        </div>
        
        <div ref={ctaRef}>
          <CTASection isVisible={isCtaVisible} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
