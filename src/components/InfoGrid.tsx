import { Star, Utensils, MapPin, Truck, ShoppingBag } from "lucide-react";

const items = [
  {
    icon: Star,
    label: "Calificación",
    value: "4.3 ★",
    detail: "+1,800 reseñas en Google",
  },
  {
    icon: Utensils,
    label: "Concepto",
    value: "Tenedor Libre",
    detail: "Parrilla familiar tradicional",
  },
  {
    icon: MapPin,
    label: "Consumo en el lugar",
    value: "En el local",
    detail: "Ambiente cálido y familiar",
  },
  {
    icon: Truck,
    label: "Delivery",
    value: "Entrega a domicilio",
    detail: "Pedí desde tu casa",
  },
  {
    icon: ShoppingBag,
    label: "Take Away",
    value: "Retiro en puerta",
    detail: "Listo para llevar",
  },
];

const InfoGrid = () => {
  return (
    <section className="py-20 lg:py-28 section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center text-cream mb-4 reveal">
          ¿Por qué elegirnos?
        </h2>
        <p className="text-smoke text-center mb-14 reveal reveal-delay-1 max-w-md mx-auto">
          Tradición, calidad y el mejor asado de Wilde en un solo lugar.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`reveal reveal-delay-${i + 1} group bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_hsl(6_78%_50%/0.1)] ${
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm text-smoke font-medium uppercase tracking-wider mb-1">
                {item.label}
              </p>
              <p className="text-xl font-heading font-bold text-cream">
                {item.value}
              </p>
              <p className="text-sm text-smoke mt-1">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoGrid;
