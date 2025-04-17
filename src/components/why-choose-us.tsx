import { Check } from "lucide-react";

const benefits = [
  {
    title: "Experienced Professionals",
    description:
      "Our team consists of certified tax experts with years of experience in GST compliance.",
  },
  {
    title: "Affordable Pricing",
    description:
      "We offer competitive pricing packages suited for businesses of all sizes.",
  },
  {
    title: "Timely Services",
    description:
      "We ensure all your filings and compliance work is completed on time.",
  },
  {
    title: "Dedicated support for all your tax queries",
    description:
      "Our team is available to answer all your tax-related questions and provide guidance.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start p-6 rounded-lg border border-border bg-card"
            >
              <div className="mr-4 bg-primary/10 p-2 rounded-full">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
