import {  Users, Zap, Globe, TrendingUp } from "lucide-react";

const benefits = [
  {
    title: "Expert Consulting Team",
    description:
      "Our team consists of IIBA & PMI certified consultants with 100+ years of combined experience in business strategy and digital transformation.",
    icon: Users
  },
  {
    title: "Proven Track Record",
    description:
      "We've successfully mentored 100+ startups and led 500+ successful projects across 13 countries with consistent results.",
    icon: TrendingUp
  },
  {
    title: "Revenue-Based Partnership",
    description:
      "Innovative 50% upfront + 50% on revenue model ensures our success is aligned with yours. We win when you win.",
    icon: Zap
  },
  {
    title: "Global Reach & Support",
    description:
      "24/7 dedicated support across 13 countries with local expertise and global network of 100+ developers and specialists.",
    icon: Globe
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg text-muted-foreground">
            Discover what makes us the trusted partner for business transformation and growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="flex items-start p-6 rounded-lg border border-border bg-background hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="mr-4 bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}