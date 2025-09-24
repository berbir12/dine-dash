import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <HowItWorks />
      <Registration />
      <Footer />
    </div>
  );
};

export default Index;