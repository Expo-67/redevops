import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Stramco",
    role: "HR Director",
    content:
      "Redevops transformed our HR operations with their innovative platform. The automated systems and intuitive interface have streamlined our processes significantly.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Michael Raponi",
    company: "Raponi Gardens",
    role: "Founder",
    content:
      "The web application Redevops built for us has revolutionized how we showcase our landscaping projects. Our client engagement has increased dramatically.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Priya Sharma",
    company: "Asyana",
    role: "Operations Manager",
    content:
      "Their hotel booking platform exceeded our expectations. The guest management features are intuitive and have improved our operational efficiency tremendously.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "David Chen",
    company: "Service-Moti",
    role: "CEO",
    content:
      "Redevops delivered a comprehensive garage management solution that has transformed our business. The automated reminders and tracking features are game-changers.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-6">
            what our clients say
          </h2>
          <p className="font-mono text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from the businesses we've
            helped transform!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card/20 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="font-mono text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-sans font-bold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="font-mono text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
