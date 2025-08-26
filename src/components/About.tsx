import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Zap, Target, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Solutions techniques adaptées",
      description: "Des solutions sur mesure pour répondre aux besoins spécifiques de chaque entreprise"
    },
    {
      icon: Zap,
      title: "Études de simulation avancées",
      description: "Simulations mécaniques, thermiques, fluidiques avec les dernières technologies"
    },
    {
      icon: Target,
      title: "Conception et optimisation",
      description: "Conception et optimisation de machines et structures pour une performance maximale"
    },
    {
      icon: Users,
      title: "Support technique R&D",
      description: "Accompagnement et support pour relever les défis des domaines complexes"
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-gradient-secondary opacity-50" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground animate-fade-in-up">
            Qui nous sommes
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 animate-slide-in-left" />
          
          <p className="text-lg text-foreground leading-relaxed mb-8 animate-slide-in-right font-light">
            <strong className="text-primary">Simulation Bit</strong> est un bureau d'études spécialisé dans la simulation numérique, 
            la conception mécanique et électrique, et l'ingénierie sur mesure.
          </p>
          
          <p className="text-lg text-foreground leading-relaxed animate-fade-in-up">
            Nous accompagnons les entreprises dans leurs projets industriels en leur offrant :
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-primary p-3 rounded-lg group-hover:shadow-glow transition-all duration-300 animate-pulse-glow">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-foreground/80 leading-relaxed font-light">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Notre mission</h3>
          <p className="text-lg text-foreground/90 leading-relaxed mb-6 font-light">
            Aider les sociétés à <span className="text-primary font-semibold">innover</span>, 
            <span className="text-primary font-semibold"> réduire leurs risques</span> et 
            <span className="text-primary font-semibold"> améliorer leurs performances</span> grâce à des outils numériques 
            et une expertise multidisciplinaire.
          </p>
          
          <p className="text-foreground/80 font-light">
            Avec <strong className="text-primary">Simulation Bit</strong>, vous bénéficiez d'un partenaire fiable, agile et orienté résultats, 
            capable de transformer vos idées et vos problématiques en solutions concrètes et performantes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;