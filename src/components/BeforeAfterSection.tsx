import beforeAfterImg from "@/assets/before-after.jpg";

const BeforeAfterSection = () => (
  <section className="py-20">
    <div className="container max-w-4xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Antes y Después</h2>
        <p className="text-muted-foreground">Resultados reales de nuestras limpiezas post-obra.</p>
      </div>
      <div className="rounded-2xl overflow-hidden shadow-card">
        <img src={beforeAfterImg} alt="Antes y después de limpieza post-obra profesional" className="w-full h-auto" />
      </div>
    </div>
  </section>
);

export default BeforeAfterSection;
