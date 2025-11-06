import { Code, Megaphone, Users, Layers, Globe, Languages } from "lucide-react";

export default function GlobalExcellence() {
  const stats = [
    {
      icon: Code,
      value: "100+",
      label: "Developers",
      color: "bg-blue-100"
    },
    {
      icon: Megaphone,
      value: "50+",
      label: "Marketers",
      color: "bg-blue-100"
    },
    {
      icon: Users,
      value: "100+",
      label: "Mentors",
      color: "bg-blue-100"
    },
    {
      icon: Layers,
      value: "20+",
      label: "Domains",
      color: "bg-blue-100"
    },
    {
      icon: Globe,
      value: "15+",
      label: "Countries",
      color: "bg-blue-100"
    },
    {
      icon: Languages,
      value: "25+",
      label: "Languages",
      color: "bg-blue-100"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Global Excellence</h2>
          <p className="text-lg text-muted-foreground">
            Showcasing transformational results across industries with our 100+ expert team and innovative strategies.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className={`${stat.color} p-4 rounded-full mb-4 w-20 h-20 flex items-center justify-center`}>
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}