import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Check, Award } from "lucide-react";

export default function About() {
  const stats = [
    { value: "100+", label: "Startups Mentored" },
    { value: "100+", label: "Successful Projects" }
  ];

  const certifications = [
    "MBA-Certified Business Analyst",
    "PMI Certified Professional",
    "ISO Integration Expertise"
  ];

  const trackRecord = [
    "Successfully delivered 500+ startups, launched 50,000+ projects in 4 months",
    "Certified development partnership with Fortune 500 companies across India, Canada, and UAE"
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">About Abhijeet Suman</h2>
          <p className="text-lg text-muted-foreground">
            Meet the strategic mind behind successful business transformations worldwide
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Image */}
          <div>
            <Card className="overflow-hidden border border-border hover:shadow-lg transition-all duration-300 p-0">
              <img 
                src="/user.jfif" 
                alt="Abhijeet Suman" 
                className="w-full h-auto object-cover"
              />
            </Card>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Professional Background Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Professional Background</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Leading a trusted foundation of 100+ expert developers, digital marketers, and business strategists across major development domains and business strategies across more domains. From ASO to Business Formation, Pitch Decks to Blockchains backed by Playtech.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We don&apos;t just consult—we become your strategic partners. With our revolutionary 50% upfront + 50% on revenue model, we&apos;re committed to your success backed by 10+ years&apos; track.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className="bg-primary/5 border-border hover:bg-primary/10 transition-colors">
                    <CardContent className="p-4 text-center">
                      <p className="text-2xl font-bold text-primary">{stat.value}</p>
                      <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications & Expertise Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Certifications & Expertise
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Specializing with data-backed strategies in automation, and comprehensive digital transformation frameworks across 50+ industries.
              </p>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Track Record Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Track Record</h3>
              <div className="space-y-3">
                {trackRecord.map((record, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Badge className="mt-1 bg-primary/20 text-primary border-none flex-shrink-0">
                      {index + 1}
                    </Badge>
                    <p className="text-muted-foreground leading-relaxed pt-0.5">{record}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Stats */}
            <Card className="bg-primary/5 border border-primary/20">
              <CardContent className="p-6 text-center">
                <p className="text-3xl font-bold text-primary mb-1">20+</p>
                <p className="text-muted-foreground">Countries Served</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}