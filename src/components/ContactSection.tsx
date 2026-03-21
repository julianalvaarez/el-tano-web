import { Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 lg:py-28 section-padding" id="contacto">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center text-cream mb-14 reveal">
          Encontranos
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <div className="reveal rounded-xl overflow-hidden h-80 md:h-full min-h-[320px] border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.5!2d-58.3236823!3d-34.6995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a333005d7f9e91%3A0x605756da5db8ed8f!2sParrilla%20El%20tano!5e0!3m2!1ses!2sar!4v1710000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Parrilla El Tano"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6 justify-center">
            <div className="reveal reveal-delay-1 bg-card rounded-xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-bold text-cream text-lg">Dirección</p>
                  <p className="text-smoke mt-1">Av. Bartolomé Mitre 5735, Wilde</p>
                  <p className="text-smoke">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>

            <div className="reveal reveal-delay-2 bg-card rounded-xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-bold text-cream text-lg">Teléfono</p>
                  <a href="tel:01170990834" className="text-primary hover:text-ember-dark transition-colors mt-1 block">
                    011 7099-0834
                  </a>
                </div>
              </div>
            </div>

            <div className="reveal reveal-delay-3 bg-card rounded-xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-bold text-cream text-lg">Horarios</p>
                  <p className="text-smoke mt-1">Martes a Sábados: 16:00 – 01:00</p>
                  <p className="text-smoke">Domingos: 11:30 – 17:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
