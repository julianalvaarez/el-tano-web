import { Star } from "lucide-react";

const reviews = [
  {
    name: "Marcelo R.",
    rating: 5,
    text: "Espectacular el asado, la carne de primera calidad. Fuimos con toda la familia y repetimos sin dudar. El vacío es increíble.",
    date: "Hace 2 semanas",
  },
  {
    name: "Carolina G.",
    rating: 4,
    text: "Muy buena relación precio-calidad para un tenedor libre. Las achuras estaban perfectas y la atención fue muy cálida.",
    date: "Hace 1 mes",
  },
  {
    name: "Diego F.",
    rating: 5,
    text: "El mejor tenedor libre de la zona sur, lejos. Siempre volvemos con amigos. La entraña y el chorizo son un manjar.",
    date: "Hace 3 semanas",
  },
  {
    name: "Soledad M.",
    rating: 4,
    text: "Lugar familiar con mucha onda. Los chicos la pasaron genial y la comida riquísima. El postre casero es un golazo.",
    date: "Hace 2 meses",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 section-padding" id="testimonios">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center text-cream mb-4 reveal">
          Lo que dicen nuestros clientes
        </h2>
        <div className="flex items-center justify-center gap-2 mb-14 reveal reveal-delay-1">
          <div className="flex">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-accent fill-accent" />
            ))}
            <Star className="w-5 h-5 text-accent fill-accent/40" />
          </div>
          <span className="text-smoke text-sm ml-1">4.3 de 5 · +1,800 reseñas</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`reveal reveal-delay-${i + 1} bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300`}
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, s) => (
                  <Star
                    key={s}
                    className={`w-4 h-4 ${
                      s < review.rating
                        ? "text-accent fill-accent"
                        : "text-iron fill-iron"
                    }`}
                  />
                ))}
              </div>
              <p className="text-cream/80 leading-relaxed mb-4 text-[0.95rem]">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-primary font-heading font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <span className="text-cream font-medium text-sm">{review.name}</span>
                </div>
                <span className="text-smoke text-xs">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
