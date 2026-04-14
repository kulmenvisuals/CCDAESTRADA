import Icon from '../components/ui/Icon';

const IMG_HERO =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBXFz9RHIKTWc7-lubtHiDlYQSLG-e6wh2xgwcyuUixka0EGwJK3smz2Od7UZFgY7N21T_ebJF37iyF4pIeTY__2tqGgodlG9P2z__LIsriakkb86VU3XhnpVpk6yhRchLizkKc-Za_eIp1hJCLtbv-jIWUwH6y5gnZlDxkeSH0jvm_BsEX9r7hGZtCGRO04UyVRXb_ugWY6TaoYk_bmVmYOR02m772K-hTXlW84hDPh1S50u_seEf5iSDD563B7LH9tszXnbx2_hjn';
const IMG_IMPLANTES =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBk1DSCn6NZ-cUsKVMNvwcyOkZAV9LVuxJzmdOmHs3HAYGDUkr2Pbn7kC9UM6tOjuSjP5UQkfg1IkWX9gdBW6_DOoBCxWx4SrTyOHORrG1gyE8u4deFZDPijjyooYw90jX4mT_baqrnXObBOOfZnHRlEq3GepZt6ZeEAfldHQz23KEqGOMLQCnK_o0rLynWft0zHDKS7Uxhz92JGxvtS_6Vqq26hZTk_xq0anmJEeiydF2XwnniC9qXXi-T9aqVw8gv4hH_owxXLR5Z';
const IMG_ORTODONCIA =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCUiEskJ5t66hjx486hBxufeEEsssjFVlimqkgqjAqBUhQa2cKVqMOkpucy3N0WjW9FAE2IE0D_7buJYqo3RfwuDKECC1XDK7DQWiKwhCoEY757XhWHEt1zyNXILqoa3M6EGaCg7u42oujCTjbkbQcmNWBAhMx00P-5lnGB5QN5XrY6H4rkCWjNvqul9QSBcnCTN4CcVgUHgRDMxK1uJlhWa_6f0Ge8_O_5NDFFvrLIm3wLAddT6-F3KRPn6TL2HUDMpSafX2l3Mg9P';
const IMG_ESTETICA =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCI3BUDADhy5o7Y3wU0I0bMhTDBaj_YJRF4nQo3aUH-bMfX1xo1J57oj9y00ZWlantUTqqVEBH4J766-vcoaI9kKA5-IBhXo85g8_6N6SUApgF6z4cjZfWryc1oXwUqnRgLonueJAglC25w98AiZ8ggJ-NuFO4LqiNbG5ffnCfxUodnSCJztxnDO34sHoD6fUfkt0TuXAxJXcxJWfWESF3BsqqWY95Q0c2tlPGJCOePgiezn9FNHPTWpcaQH25wX4YqQCc5h8RkqC_M';

function TreatmentCard({ title, queSrc, imgAlt, flipLayout, children }) {
  const textBlock = (
    <div className={`order-2 ${flipLayout ? 'lg:order-1' : ''}`}>
      <div
        className={`bg-surface-container-lowest p-10 lg:p-16 rounded-xl editorial-shadow relative z-10 ${
          flipLayout ? '-mr-0 lg:-mr-20' : '-ml-0 lg:-ml-20'
        }`}
      >
        <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">{title}</h2>
        <div className="space-y-8">{children}</div>
      </div>
    </div>
  );

  const imageBlock = (
    <div className={`order-1 ${flipLayout ? 'lg:order-2' : ''}`}>
      <div className="aspect-square rounded-xl overflow-hidden">
        <img src={queSrc} alt={imgAlt} className="w-full h-full object-cover" />
      </div>
    </div>
  );

  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {flipLayout ? (
        <>
          {textBlock}
          {imageBlock}
        </>
      ) : (
        <>
          {imageBlock}
          {textBlock}
        </>
      )}
    </article>
  );
}

function TreatmentSubsection({ label, children }) {
  return (
    <div>
      <h3 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">{label}</h3>
      <p className="text-on-surface-variant leading-relaxed">{children}</p>
    </div>
  );
}

function SolvedBlock({ children }) {
  return (
    <div className="bg-surface-container-low p-6 rounded-lg">
      <h3 className="text-sm font-bold text-secondary tracking-widest uppercase mb-2 flex items-center gap-2">
        <Icon name="check_circle" className="text-sm" />
        Problema Solucionado
      </h3>
      <p className="text-on-surface-variant italic">{children}</p>
    </div>
  );
}

function ConsultBtn() {
  return (
    <button className="w-full py-4 bg-gradient-primary text-white rounded-md font-label font-bold tracking-widest uppercase hover:opacity-95 transition-all flex justify-center items-center gap-2">
      Consultar mi caso
      <Icon name="arrow_forward" />
    </button>
  );
}

export default function Treatments() {
  return (
    <main className="pt-32 pb-24">
      {/* ── HERO ── */}
      <header className="max-w-7xl mx-auto px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="inline-block py-1 px-3 bg-secondary-container text-on-secondary-container text-xs font-bold rounded-full mb-6 tracking-wider uppercase">
              Excelencia Dental
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface tracking-tight leading-tight mb-8">
              Nuestros Tratamientos{' '}
              <span className="text-primary italic">en A Estrada</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              Entendemos que ir al dentista no se trata solo de dientes, sino de tu bienestar.
              Descubre soluciones honestas y personalizadas para que vuelvas a sonreír con total
              confianza.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden editorial-shadow">
              <img src={IMG_HERO} alt="Clínica dental moderna" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      {/* ── TREATMENTS ── */}
      <section className="max-w-7xl mx-auto px-8 space-y-32">
        {/* Implantes */}
        <TreatmentCard
          title="Implantes dentales en A Estrada"
          queSrc={IMG_IMPLANTES}
          imgAlt="Implante dental"
          flipLayout={true}
        >
          <TreatmentSubsection label="¿Qué es?">
            Es la forma más natural de recuperar un diente perdido. Es como poner una "raíz" nueva
            de titanio que sostiene una pieza dental idéntica a las tuyas.
          </TreatmentSubsection>
          <TreatmentSubsection label="¿Cuándo lo necesitas?">
            Si te falta una o varias piezas, si tus prótesis actuales se mueven o si quieres evitar
            dañar los dientes vecinos para poner un puente.
          </TreatmentSubsection>
          <SolvedBlock>
            Vuelve a comer lo que quieras sin miedo y recupera la estética de tu sonrisa de forma
            permanente.
          </SolvedBlock>
          <TreatmentSubsection label="Cómo lo hacemos">
            Usamos tecnología 3D para planificar cada paso sin sorpresas. Es un proceso suave,
            preciso y con una recuperación sorprendentemente rápida.
          </TreatmentSubsection>
          <ConsultBtn />
        </TreatmentCard>

        {/* Ortodoncia */}
        <TreatmentCard
          title="Ortodoncia Invisible en A Estrada"
          queSrc={IMG_ORTODONCIA}
          imgAlt="Ortodoncia invisible"
          flipLayout={false}
        >
          <TreatmentSubsection label="¿Qué es?">
            Es alinear tus dientes usando fundas transparentes casi invisibles que puedes quitar
            para comer y cepillarte. Sin alambres ni molestias.
          </TreatmentSubsection>
          <TreatmentSubsection label="¿Cuándo lo necesitas?">
            Si tienes dientes apiñados, huecos entre ellos o simplemente quieres mejorar la
            posición de tu mordida sin que nadie note que llevas aparato.
          </TreatmentSubsection>
          <SolvedBlock>
            Dientes perfectamente alineados y una boca más sana, ya que los dientes rectos son más
            fáciles de limpiar.
          </SolvedBlock>
          <TreatmentSubsection label="Cómo lo hacemos">
            Escaneamos tu boca en 3D (sin pastas incómodas) y diseñamos digitalmente toda la
            evolución de tu sonrisa antes de empezar.
          </TreatmentSubsection>
          <ConsultBtn />
        </TreatmentCard>

        {/* Estética */}
        <TreatmentCard
          title="Estética Dental en A Estrada"
          queSrc={IMG_ESTETICA}
          imgAlt="Estética dental"
          flipLayout={true}
        >
          <TreatmentSubsection label="¿Qué es?">
            Son tratamientos como carillas o blanqueamientos diseñados para mejorar el color, la
            forma y la armonía general de tu cara a través de tu sonrisa.
          </TreatmentSubsection>
          <TreatmentSubsection label="¿Cuándo lo necesitas?">
            Si tienes los dientes oscurecidos, desgastados, astillados o simplemente no te gusta
            cómo se ven en las fotos.
          </TreatmentSubsection>
          <SolvedBlock>
            Eliminamos las inseguridades al sonreír, dándote un aspecto más joven, saludable y
            radiante.
          </SolvedBlock>
          <TreatmentSubsection label="Cómo lo hacemos">
            Realizamos un diseño de sonrisa personalizado. Usamos materiales que imitan a la
            perfección el esmalte natural para que el resultado sea bello y creíble.
          </TreatmentSubsection>
          <ConsultBtn />
        </TreatmentCard>
      </section>

      {/* ── TRUST / SEO HOOK ── */}
      <section className="mt-32 max-w-4xl mx-auto px-8 text-center">
        <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">
          ¿Por qué elegirnos como tu dentista en A Estrada?
        </h2>
        <p className="text-lg leading-relaxed text-on-surface-variant mb-12">
          En nuestro centro clínico dental, combinamos la cercanía de toda la vida con la
          tecnología más avanzada de Galicia. No somos una franquicia; somos un equipo que conoce
          tu nombre y se preocupa por tu salud a largo plazo.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { icon: 'clinical_notes', label: 'Diagnóstico Real' },
            { icon: 'verified', label: 'Materiales Top' },
            { icon: 'schedule', label: 'Sin Esperas' },
          ].map(({ icon, label }) => (
            <div key={label} className="p-6">
              <Icon name={icon} className="text-4xl text-primary mb-4 block" />
              <p className="font-bold text-on-surface">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
