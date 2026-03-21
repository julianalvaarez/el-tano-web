import asadoImg from "@/assets/asado-platter.jpg";
import { Instagram } from "lucide-react";

const MenuSection = () => {
  return (
    <section className="py-20 lg:py-28 section-padding bg-secondary/50" id="menu">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="reveal rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={asadoImg}
              alt="Tabla de asado con cortes argentinos"
              className="w-full h-80 md:h-[28rem] object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-cream mb-6 reveal">
              Tenedor Libre
            </h2>
            <p className="text-cream/70 mb-8 reveal reveal-delay-1 leading-relaxed">
              Disfrutá de nuestro buffet libre con los mejores cortes de parrilla:
              asado, vacío, entraña, chorizo, morcilla, achuras y mucho más.
              Todo lo que puedas comer, a un precio inigualable.
            </p>

            <div className="reveal reveal-delay-2 bg-card rounded-xl p-6 border border-border mb-8">
              <p className="text-sm text-smoke uppercase tracking-wider mb-2 font-medium">
                Precio por persona
              </p>
              <p className="text-3xl sm:text-4xl font-heading font-bold text-primary break-words">
                $40.000 – $50.000
              </p>
              <p className="text-sm text-smoke mt-2">
                Incluye parrilla libre, guarniciones y ensaladas.
              </p>
            </div>

            <a
              href="https://www.instagram.com/parrilla_eltanoo"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal reveal-delay-3 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[hsl(330,70%,50%)] to-[hsl(30,90%,55%)] text-cream font-semibold rounded-lg hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              <Instagram className="w-5 h-5" />
              Ver menú en Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
