import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Logo3D from "./Logo3D";
import ParticleFieldCanvas from "./ParticleField";
import FloatingElements from "./FloatingElements";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Particules 3D en arrière-plan */}
      <ParticleFieldCanvas className="opacity-30" />
      <FloatingElements className="opacity-20" />
      
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-secondary" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-primary rounded-full opacity-20 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-primary/30 rounded-full opacity-20 blur-2xl animate-float" />
      
      <div className="container relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo avec effet 3D */}
          <div className="mb-12 animate-fade-in-up">
            <Logo3D className="mx-auto animate-float" />
          </div>
          
          {/* Hero content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-primary animate-slide-in-left">
            Simulation Bit
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed animate-slide-in-right font-light">
            Bureau d'études spécialisé dans la simulation numérique, 
            <br className="hidden md:block" />
            la conception mécanique et l'ingénierie sur mesure
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="lg" className="group">
              Découvrir nos services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="bg-card/20 backdrop-blur-sm border-primary/50 text-foreground hover:bg-card/40">
              Demander un devis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;