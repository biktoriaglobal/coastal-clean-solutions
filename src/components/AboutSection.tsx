import { Shield, Clock, Award } from "lucide-react";

const values = [
  { icon: Shield, title: "Garantía de Calidad", desc: "Si no estás satisfecho, volvemos gratis. Sin preguntas." },
  { icon: Clock, title: "Disponibilidad Total", desc: "7 días a la semana, incluidos festivos. Adaptados al turismo costero." },
  { icon: Award, title: "Equipo Profesional", desc: "Personal formado, uniformado y con experiencia en la costa valenciana." },
];

const AboutSection = () => (
  <section id="nosotros" className="py-20">
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Sobre Nosotros</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Somos un equipo local especializado en la limpieza profesional de la costa valenciana. Conocemos cada pueblo, cada necesidad.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {values.map((v) => (
          <div key={v.title} className="text-center">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <v.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{v.title}</h3>
            <p className="text-sm text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
