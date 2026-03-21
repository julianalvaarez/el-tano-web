import heroImg from "@/assets/hero-parrilla.jpg";
import logo from "@/assets/logo-el-tano.png";
import { Phone, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Parrilla encendida con cortes de carne"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center section-padding max-w-4xl mx-auto pt-24 pb-16">
        <img
          src={logo}
          alt="Parrilla El Tano logo"
          className="w-28 h-28 mx-auto mb-6 reveal object-contain bg-cream/90 rounded-full p-2"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.05] text-balance reveal reveal-delay-1 text-cream">
          El Templo del Asado
          <span className="block text-primary mt-2">en Wilde</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-cream/80 max-w-xl mx-auto reveal reveal-delay-2 font-body">
          Experiencia de Tenedor Libre auténtica y familiar desde siempre.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center reveal reveal-delay-3">
          <a
            href="https://www.google.com/maps/place/Parrilla+El+tano/@-34.7076716,-58.310656,15z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-ember-dark transition-colors duration-200 active:scale-[0.97] text-base"
          >
            <MapPin className="w-5 h-5" />
            Ver Ubicación
          </a>
          <a
            href="tel:01170990834"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-cream/30 text-cream font-semibold rounded-lg hover:bg-cream/10 transition-colors duration-200 active:scale-[0.97] text-base"
          >
            <Phone className="w-5 h-5" />
            Llamar Ahora
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 reveal reveal-delay-5">
        <div className="w-6 h-10 rounded-full border-2 border-cream/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-cream/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
