import { Hero } from "./components/hero";
import { ClientsSection } from "./components/clients";
import { TestimonialsSection } from "./components/testimonials";
import ContactSection from "./components/contact";
import { Footer } from "./components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ClientsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
