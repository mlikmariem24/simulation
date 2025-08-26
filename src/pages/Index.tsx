// Update this page (the content is just a fallback if you fail to update the page)

import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default Index;
