import { Code, Heart } from "lucide-react";
import logo from "../assets/redevops-high-resolution-logo.png";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Image
              src={logo}
              alt="redevops logo"
              className="h-8 w-auto object-contain"
            />

            <span className="font-sans text-2xl font-bold">redevops</span>
          </div>
          <p className="font-mono text-primary-foreground/80 mb-6">
            Transforming ideas into powerful digital solutions
          </p>
          <div className="flex items-center justify-center gap-2 text-sm font-mono text-primary-foreground/60">
            <span>Made with</span>
            <Heart className="w-4 h-4 fill-current text-accent" />
            <span>by the redevops team</span>
          </div>
          <div className="mt-6 pt-6 border-t border-primary-foreground/20">
            <p className="font-mono text-sm text-primary-foreground/60">
              © 2025 redevops. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
