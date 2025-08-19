"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Clock, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

const clients = [
  {
    name: "Stramco",
    logo: "/placeholder.svg?height=80&width=200",
    description:
      "Comprehensive HR solutions including outsourcing, consultancy, audit services, recruitment, and selection processes.",
    services: [
      "HR Outsourcing",
      "HR Consultancy",
      "HR Audit",
      "Recruitment & Selection",
    ],
    status: "Live",
    liveUrl: "https://stramco.com",
  },
  {
    name: "Raponi Gardens",
    logo: "/placeholder.svg?height=80&width=200",
    description:
      "Professional landscaping services dedicated to transforming outdoor spaces into natural paradise environments.",
    services: [
      "Landscape Design",
      "Garden Transformation",
      "Outdoor Spaces",
      "Natural Paradise Creation",
    ],
    status: "Live",
    liveUrl: "https://raponigardens.com",
  },
  {
    name: "Asyana",
    logo: "/placeholder.svg?height=80&width=200",
    description:
      "Advanced hotel booking platform designed to streamline guest management and enhance hospitality operations.",
    services: [
      "Hotel Booking System",
      "Guest Management",
      "Reservation Platform",
      "Hospitality Solutions",
    ],
    status: "In Progress",
    liveUrl: null,
  },
  {
    name: "Service-Moti",
    logo: "/placeholder.svg?height=80&width=200",
    description:
      "Revolutionary garage operations platform featuring digital service records, automated reminders, and comprehensive tracking.",
    services: [
      "Digital Service Records",
      "Automated Reminders",
      "Comprehensive Tracking",
      "Garage Management",
    ],
    status: "Live",
    liveUrl: "https://servicemoti.com",
  },
];

export function ClientsSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(clients.length).fill(false)
  );

  useEffect(() => {
    const observers = clients.map((_, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }
          });
        },
        { threshold: 0.1, rootMargin: "50px" }
      );

      const element = document.getElementById(`client-card-${index}`);
      if (element) observer.observe(element);

      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="font-sans text-5xl md:text-6xl font-bold text-foreground mb-6">
            clients
          </h2>
          <p className="font-mono text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We've partnered with innovative companies across various industries
            to deliver exceptional digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {clients.map((client, index) => (
            <Card
              key={index}
              id={`client-card-${index}`}
              className={`group bg-card/80 backdrop-blur-sm border-2 border-border/50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 overflow-hidden transform ${
                visibleCards[index]
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-8 opacity-0 scale-95"
              } hover:scale-105 hover:-translate-y-2`}
              style={{
                transitionDelay: visibleCards[index]
                  ? `${index * 150}ms`
                  : "0ms",
                animation: visibleCards[index]
                  ? `slideInUp 0.8s ease-out ${index * 150}ms both`
                  : "none",
              }}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-secondary/50 group-hover:bg-primary/20 transition-colors duration-300">
                      <img
                        src={client.logo || "/placeholder.svg"}
                        alt={`${client.name} logo`}
                        className="h-8 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-sans text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {client.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono font-medium transition-all duration-300 group-hover:scale-105 ${
                        client.status === "Live"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                      }`}
                    >
                      {client.status === "Live" ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <Clock className="w-4 h-4" />
                      )}
                      {client.status}
                    </span>
                    {client.liveUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="font-mono bg-transparent border-2 hover:border-accent hover:text-accent hover:scale-110 hover:shadow-lg transition-all duration-300"
                        onClick={() => window.open(client.liveUrl, "_blank")}
                      >
                        View Live
                        <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    )}
                  </div>
                </div>

                <p className="font-mono text-muted-foreground mb-8 leading-relaxed text-lg">
                  {client.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {client.services.map((service, serviceIndex) => (
                    <span
                      key={serviceIndex}
                      className="px-4 py-2 bg-gradient-to-r from-accent/10 to-primary/10 text-foreground rounded-full text-sm font-mono font-medium border border-accent/20 hover:border-accent/40 hover:scale-105 hover:shadow-md transition-all duration-300"
                      style={{ transitionDelay: `${serviceIndex * 50}ms` }}
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
