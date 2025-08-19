import { Code, Smartphone, Globe } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-accent/10" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-56 sm:h-56 bg-black/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-36 h-36 sm:w-52 sm:h-52 bg-black/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-32 h-32 sm:w-44 sm:h-44 bg-black/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 items-center min-h-[80vh]">
            {/* Text (first on mobile) */}
            <div className="flex flex-col justify-center p-4 sm:p-6 lg:p-16 space-y-6 text-center lg:text-left">
              <h1 className="font-inter text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight tracking-tight">
                building digital{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">
                  solutions
                </span>
              </h1>

              <p className="font-source-sans text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                we design and develop modern web and mobile apps — fast,
                scalable, and tailored to your business.
              </p>

              {/* Service Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-sm sm:max-w-xl mx-auto lg:mx-0">
                <div className="group relative p-4 rounded-xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                  <Globe className="w-6 h-6 text-primary mb-2 mx-auto lg:mx-0" />
                  <h3 className="font-inter font-bold text-foreground text-sm mb-1 text-center lg:text-left">
                    Web Applications
                  </h3>
                  <p className="font-source-sans text-xs sm:text-sm text-muted-foreground text-center lg:text-left">
                    Responsive & scalable solutions
                  </p>
                </div>

                <div className="group relative p-4 rounded-xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1">
                  <Smartphone className="w-6 h-6 text-accent mb-2 mx-auto lg:mx-0" />
                  <h3 className="font-inter font-bold text-foreground text-sm mb-1 text-center lg:text-left">
                    Mobile Apps
                  </h3>
                  <p className="font-source-sans text-xs sm:text-sm text-muted-foreground text-center lg:text-left">
                    Cross-platform excellence
                  </p>
                </div>
              </div>
            </div>

            {/* Cube (below text on mobile) */}
            <div className="flex justify-center items-center p-4 sm:p-6 lg:p-16 mt-8 lg:mt-0">
              <div className="relative">
                <div className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[260px] md:h-[260px] lg:w-[400px] lg:h-[400px] relative perspective-1000">
                  <div className="rubiks-cube-container animate-rubiks-solve">
                    {["front", "back", "right", "left", "top", "bottom"].map(
                      (face) => (
                        <div
                          key={face}
                          className={`rubiks-face rubiks-${face}`}
                        >
                          {Array.from({ length: 9 }).map((_, i) => (
                            <div
                              key={i}
                              className="rubiks-square bg-black"
                            ></div>
                          ))}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
