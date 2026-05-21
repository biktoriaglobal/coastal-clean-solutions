import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/logo.png";

const Legal = () => (
  <main className="bg-background min-h-screen">
    <header className="border-b border-border bg-card">
      <div className="container py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Limpieza Efficiente" className="h-10 w-auto" />
          <span className="font-display font-bold text-lg text-foreground">Limpieza Efficiente</span>
        </Link>
        <Link to="/" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Volver al inicio
        </Link>
      </div>
    </header>

    <div className="container max-w-3xl py-14 space-y-16 text-foreground/80 leading-relaxed">
      <section id="aviso-legal">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Aviso Legal</h1>
        <p className="mb-3">En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa:</p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li><strong>Titular:</strong> Limpieza Efficiente (Grupo Max Efficiency)</li>
          <li><strong>Email:</strong> limpieza@max-efficiency.es</li>
          <li><strong>Teléfono:</strong> +34 601 902 204</li>
          <li><strong>Domicilio:</strong> Costa Valenciana, España</li>
        </ul>
        <p>El acceso y uso de este sitio web atribuye la condición de usuario y supone la aceptación de las condiciones recogidas en el presente Aviso Legal. Limpieza Efficiente se reserva el derecho a modificar los contenidos del sitio sin previo aviso. Todos los textos, imágenes y elementos gráficos son propiedad de Limpieza Efficiente o cuentan con licencia para su uso.</p>
      </section>

      <section id="privacidad">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Política de Privacidad</h2>
        <p className="mb-3">De conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y Garantía de los Derechos Digitales (LOPDGDD), informamos:</p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li><strong>Responsable del tratamiento:</strong> Limpieza Efficiente (Grupo Max Efficiency).</li>
          <li><strong>Finalidad:</strong> Gestionar las solicitudes de presupuesto y comunicaciones comerciales relacionadas con nuestros servicios de limpieza.</li>
          <li><strong>Legitimación:</strong> Consentimiento del interesado al cumplimentar el formulario.</li>
          <li><strong>Destinatarios:</strong> No se cederán datos a terceros salvo obligación legal.</li>
          <li><strong>Conservación:</strong> Los datos se conservarán mientras exista relación comercial o hasta que solicite su supresión.</li>
          <li><strong>Derechos:</strong> Puede ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad enviando un email a <a className="text-primary underline" href="mailto:limpieza@max-efficiency.es">limpieza@max-efficiency.es</a>.</li>
        </ul>
      </section>

      <section id="cookies">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Política de Cookies</h2>
        <p className="mb-3">Este sitio web utiliza cookies técnicas estrictamente necesarias para su funcionamiento. No se utilizan cookies de seguimiento ni publicitarias de terceros sin su consentimiento expreso.</p>
        <p>Puede configurar su navegador para rechazar o eliminar cookies en cualquier momento. Para más información, consulte la ayuda de su navegador.</p>
      </section>

      <section id="condiciones">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Condiciones del Servicio</h2>
        <p className="mb-3">Los presupuestos facilitados son orientativos y sin compromiso. El precio definitivo se confirma tras una visita o valoración previa del inmueble. Todos los servicios prestados por Limpieza Efficiente cumplen con la normativa laboral y fiscal vigente en España. El cliente se compromete a facilitar el acceso al inmueble en la fecha y hora acordadas.</p>
        <p className="text-sm text-muted-foreground mt-8">© {new Date().getFullYear()} Limpieza Efficiente — Grupo Max Efficiency. Todos los derechos reservados.</p>
      </section>
    </div>
  </main>
);

export default Legal;