import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    societe: "",
    email: "",
    tel: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.nom || !formData.prenom || !formData.email || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive"
      });
      return;
    }

    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });

    // Reset form
    setFormData({
      nom: "",
      prenom: "",
      societe: "",
      email: "",
      tel: "",
      service: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const services = [
    "Simulation numérique",
    "Conception mécanique",
    "Ingénierie électrique",
    "Formation SolidWorks",
    "Études R&D",
    "Support technique",
    "Autre"
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-gradient-secondary opacity-50" />
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
      <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-primary-glow/20 rounded-full blur-xl" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground animate-fade-in-up">
            Contact & Devis
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 animate-slide-in-left" />
          <p className="text-lg text-foreground/90 max-w-3xl mx-auto animate-slide-in-right font-light">
            Prêt à transformer vos idées en solutions concrètes ? 
            Contactez-nous pour discuter de votre projet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">contact@simulationbit.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Téléphone</h3>
                    <p className="text-muted-foreground">+216 53 993 709</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Localisation</h3>
                    <p className="text-muted-foreground">Tunis</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3">Pourquoi nous choisir ?</h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse-glow" />
                  Expertise technique reconnue
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse-glow" />
                  Solutions sur mesure
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse-glow" />
                  Accompagnement personnalisé
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse-glow" />
                  Résultats garantis
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Demande de devis</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nom">Nom *</Label>
                      <Input
                        id="nom"
                        value={formData.nom}
                        onChange={(e) => handleChange("nom", e.target.value)}
                        className="bg-input/50 border-border/50"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="prenom">Prénom *</Label>
                      <Input
                        id="prenom"
                        value={formData.prenom}
                        onChange={(e) => handleChange("prenom", e.target.value)}
                        className="bg-input/50 border-border/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="societe">Société</Label>
                      <Input
                        id="societe"
                        value={formData.societe}
                        onChange={(e) => handleChange("societe", e.target.value)}
                        className="bg-input/50 border-border/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tel">Téléphone</Label>
                      <Input
                        id="tel"
                        type="tel"
                        value={formData.tel}
                        onChange={(e) => handleChange("tel", e.target.value)}
                        className="bg-input/50 border-border/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="bg-input/50 border-border/50"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Type de service</Label>
                    <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                      <SelectTrigger className="bg-input/50 border-border/50">
                        <SelectValue placeholder="Sélectionnez un service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="bg-input/50 border-border/50 resize-none"
                      placeholder="Décrivez votre projet, vos besoins ou vos questions..."
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full group">
                    <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    Envoyer la demande
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;