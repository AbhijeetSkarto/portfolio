import { Check, ArrowRight, FileText, Shield, FileCheck, Building, AlertCircle, Calculator, BookOpen, CreditCard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const services = [
  {
    name: "GST Registration",
    description: "Complete assistance with GST registration process, documentation and follow-ups with tax authorities.",
    icon: <FileText className="h-10 w-10 p-2 rounded-lg bg-primary/10 text-primary" />,
    popular: true,
    details: ["New registrations", "Amendment of existing", "Cancellation assistance"]
  },
  {
    name: "GST Returns Filing",
    description: "Timely and accurate filing of your monthly, quarterly and annual GST returns to ensure compliance.",
    icon: <Shield className="h-10 w-10 p-2 rounded-lg bg-primary/10 text-primary" />,
    popular: true,
    details: ["GSTR-1", "GSTR-3B", "Annual returns"]
  },
  {
    name: "GST Compliance & Advisory",
    description: "Expert guidance on GST laws, notifications and amendments to keep your business updated and compliant.",
    icon: <FileCheck className="h-10 w-10 p-2 rounded-lg bg-primary/10 text-primary" />,
    popular: false,
    details: ["Compliance review", "Notice handling", "Tax planning"]
  },
  {
    name: "MSME Registrations",
    description: "Streamlined registration process for Micro, Small and Medium Enterprises to avail government benefits.",
    icon: <Building className="h-10 w-10 p-2 rounded-lg bg-primary/10 text-primary" />,
    popular: false,
    details: ["Udyam registration", "MSME benefits", "Compliance support"]
  },
  {
    name: "Audit Compliance",
    description: "Comprehensive audit assistance ensuring your business meets all statutory compliance requirements.",
    icon: <AlertCircle className="h-10 w-10 p-2 rounded-lg bg-primary/10 text-primary" />,
    popular: false,
    details: ["GST audit", "Internal audit", "Reconciliation"]
  },
  {
    name: "Income Tax Return Filing (ITR)",
    description: "Professional preparation and filing of income tax returns for individuals and businesses.",
    icon: <Calculator className="h-10 w-10 p-2 rounded-lg bg-primary/10 text-primary" />,
    popular: true,
    details: ["Individual ITR", "Business ITR", "Tax planning"]
  },
  {
    name: "Accounting/ Book keeping",
    description: "Systematic recording and maintenance of your financial transactions with detailed reporting.",
    icon: <BookOpen className="h-10 w-10 p-2 rounded-lg bg-primary/10 text-primary" />,
    popular: false,
    details: ["Daily bookkeeping", "Financial statements", "MIS reports"]
  },
  {
    name: "GST Refund Assistance",
    description: "End-to-end support in claiming GST refunds, including documentation and authority interactions.",
    icon: <CreditCard className="h-10 w-10 p-2 rounded-lg bg-primary/10 text-primary" />,
    popular: false,
    details: ["Export refunds", "Excess payment", "ITC recovery"]
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4 px-3 py-1 text-sm bg-primary/10 hover:bg-primary/20 text-primary border-none">
            Professional Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive GST & Financial Services</h2>
          <p className="text-lg text-muted-foreground">
            Our team of certified professionals offers end-to-end solutions to manage your tax obligations efficiently
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden transition-all duration-300 hover:shadow-lg border border-border hover:border-primary/20 h-full flex flex-col"
            >
              {service.popular && (
                <div className="absolute top-0 right-0">
                  <Badge className="rounded-none rounded-bl-lg bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.name}</CardTitle>
              </CardHeader>
              
              <CardContent className="pb-4 flex-grow">
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="pt-2 pb-4">
                <Button variant="outline" size="sm" className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <Card className="border-none bg-primary/5 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            
            <CardContent className="p-8 md:p-12 text-center relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to simplify your tax compliance?
              </h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
                Let our certified GST Practitioners handle your compliance needs while you focus on your business growth. Save time, reduce errors, and avoid penalties!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  Get Started Now
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}