import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin } from "lucide-react";

export default function Results() {
  const successStories = [
    {
      image: "/skarto.jpg",
      category: "EdTech",
      title: "SKARTO EdTech",
      description: "10,000+ users in 4 months",
      metric: "₹5 Cr ARR",
      color: "bg-blue-100 text-blue-700"
    },
    {
      image: "/fintech.jpg",
      category: "FinTech",
      title: "FinTech Expansion",
      description: "Dubai to 15 countries",
      metric: "₹100 Cr Revenue",
      color: "bg-orange-100 text-orange-700"
    },
    {
      image: "/robot.jpg",
      category: "HealthTech",
      title: "Healthcare AI",
      description: "AI diagnostics platform",
      metric: "Global Presence",
      color: "bg-purple-100 text-purple-700"
    }
  ];

  const locations = [
    { name: "India", icon: "🇮🇳" },
    { name: "Dubai", icon: "🇦🇪" },
    { name: "Canada", icon: "🇨🇦" },
    { name: "UK", icon: "🇬🇧" },
    { name: "USA", icon: "🇺🇸" },
    { name: "Singapore", icon: "🇸🇬" },
    { name: "Australia", icon: "🇦🇺" }
  ];

  return (
    <section id="results" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Success Stories</h2>
          <p className="text-lg text-muted-foreground">
            Real results from real businesses that transformed with our proven strategies
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {successStories.map((story, index) => (
            <Card key={index} className="overflow-hidden border border-border hover:shadow-lg transition-all duration-300 flex flex-col h-full m-0 p-0">
              {/* Image */}
              <div className="h-48 md:h-40 overflow-hidden bg-muted">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <CardContent className="p-4 flex-grow flex flex-col">
                {/* Category Badge */}
                <Badge className={`${story.color} border-none w-fit mb-3 text-xs font-medium`}>
                  {story.category}
                </Badge>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-1">{story.title}</h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{story.description}</p>

                {/* Metric */}
                <p className="text-lg font-bold text-primary">{story.metric}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Global Presence Section */}
        <Card className="border border-border overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Global Presence</h3>
              <p className="text-muted-foreground">
                Active operations across 4 continents
              </p>
            </div>

            {/* Locations Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6">
              {locations.map((location, index) => (
                <div key={index} className="flex flex-col items-center justify-center group cursor-pointer">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground text-center">{location.name}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}