import beforeAfterImg from "@/assets/before-after.jpg";

const BeforeAfterSection = () => (
  <section className="py-24">
    <div className="container max-w-5xl">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">Resultados</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Antes y Después</h2>
        <p className="text-muted-foreground text-lg">Resultados reales de nuestras limpiezas. Mismo espacio, transformación total.</p>
      </div>
      <div className="rounded-2xl overflow-hidden shadow-card-hover">
        <img src={beforeAfterImg} alt="Antes y después de limpieza profesional — mismo espacio, solo limpieza" className="w-full h-auto" />
      </div>
      <div className="flex justify-center gap-8 mt-8">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-destructive" />
          <span className="text-sm font-medium text-muted-foreground">Antes</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-accent" />
          <span className="text-sm font-medium text-muted-foreground">Después</span>
        </div>
      </div>
    </div>
  </section>
);

export default BeforeAfterSection;
