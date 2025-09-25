import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqs = [
    {
      question: "How does the payment process work?",
      answer: "Customers order through the QR code, receive their food, and then pay after enjoying their meal. This follows the traditional restaurant experience where you pay after service."
    },
    {
      question: "Do customers need to download an app?",
      answer: "No! Customers simply scan the QR code with their phone's camera and access the digital menu instantly through their web browser. No app downloads required."
    },
    {
      question: "What if customers don't pay after service?",
      answer: "Our system includes built-in safeguards and payment reminders. Most customers appreciate the trust-based system and pay promptly. We also provide analytics to track payment completion rates."
    },
    {
      question: "How long does setup take?",
      answer: "Setup takes less than 10 minutes! We provide personalized onboarding, help you upload your menu, and get your QR codes ready. Our team is available 24/7 for support."
    },
    {
      question: "Can I customize the digital menu?",
      answer: "Absolutely! You can upload photos, update prices, mark items as unavailable, and customize the design to match your restaurant's branding. Changes appear instantly."
    },
    {
      question: "What payment methods do you support?",
      answer: "We support all major credit cards, debit cards, Apple Pay, Google Pay, and other digital wallets. Customers can also split bills easily."
    },
    {
      question: "How does the pricing work?",
      answer: "Start with a completely free 30-day trial. After that, we only charge 0.5% per successful transaction. No monthly fees, no setup costs, no contracts. You only pay when you earn money from orders."
    },
    {
      question: "How do I get started?",
      answer: "Simply fill out the registration form below and we'll contact you within 24 hours to set up your free trial. No credit card required to get started!"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about our QR ordering system
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <Card className="shadow-soft hover:shadow-elegant transition-all duration-300">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <CardHeader className="p-0">
                      <CardTitle className="text-left text-lg font-semibold">
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <CardContent className="p-0">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => {
                const element = document.getElementById('register');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Started Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                window.location.href = 'mailto:Berbir901@gmail.com';
              }}
            >
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
