import logo from "@/assets/logo-el-tano.png";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30 py-12 section-padding">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <img src={logo} alt="El Tano" width="40" height="40" decoding="async" className="w-10 h-10 object-contain bg-cream/90 rounded-full p-0.5" />
          <span className="font-heading font-bold text-cream text-lg">Parrilla El Tano</span>
        </div>

        <div className="text-center md:text-right text-sm text-smoke space-y-1">
          <p>Av. Bartolomé Mitre 5735, Wilde · 011 7099-0834</p>
          <p>Mar a Sáb 16:00–01:00 · Dom 11:30–17:30</p>
        </div>

        <a
          href="https://www.instagram.com/parrilla_eltanoo"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-smoke hover:text-primary hover:border-primary/40 transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>
      </div>
      <p className="text-center text-xs text-smoke/50 mt-8">
        © {new Date().getFullYear()} Parrilla El Tano. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
