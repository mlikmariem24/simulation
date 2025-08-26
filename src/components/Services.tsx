import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Cog, Zap, BookOpen, BarChart3, Wrench } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Cpu,
      title: "Simulation Numérique",
      description: "Analyses avancées par éléments finis pour optimiser vos conceptions",
      features: ["Simulation mécanique", "Analyse thermique", "Dynamique des fluides", "Validation de concept"]
    },
    {
      icon: Cog,
      title: "Conception Mécanique",
      description: "Développement et optimisation de systèmes mécaniques complexes",
      features: ["CAO 3D avancée", "Assemblages complexes", "Optimisation topologique", "Prototypage virtuel"]
    },
    {
      icon: Zap,
      title: "Ingénierie Électrique",
      description: "Solutions électriques et électroniques intégrées",
      features: ["Schématique électrique", "Intégration systèmes", "Automatisation", "Contrôle commande"]
    },
    {
      icon: BookOpen,
      title: "Formation SolidWorks",
      description: "Formation professionnelle sur les outils de conception 3D",
      features: ["Formation initiale", "Perfectionnement", "Certification", "Support technique"]
    },
    {
      icon: BarChart3,
      title: "Études R&D",
      description: "Recherche et développement pour l'innovation industrielle",
      features: ["Étude de faisabilité", "Innovation produit", "Optimisation procédés", "Veille technologique"]
    },
    {
      icon: Wrench,
      title: "Support Technique",
      description: "Accompagnement technique personnalisé pour vos projets",
      features: ["Expertise métier", "Résolution problèmes", "Optimisation performance", "Maintenance préventive"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30 relative">
      <div className="absolute inset-0 bg-gradient-secondary opacity-30" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground animate-fade-in-up">
            Nos Services
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 animate-slide-in-left" />
          <p className="text-lg text-foreground/90 max-w-3xl mx-auto animate-slide-in-right font-light">
            Des solutions complètes pour accompagner vos projets industriels, 
            de la conception à la réalisation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 group hover:-translate-y-2"
              >
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-foreground/80 mb-6 text-center leading-relaxed font-light">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-foreground/70">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0 animate-pulse-glow" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 inline-block animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Projet sur mesure ?</h3>
            <p className="text-foreground/80 mb-6 max-w-2xl font-light">
              Chaque projet est unique. Contactez-nous pour discuter de vos besoins spécifiques 
              et découvrir comment nous pouvons vous accompagner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;