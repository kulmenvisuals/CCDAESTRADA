import Icon from '../components/ui/Icon';

const IMG_HERO = '/img/magnific_retoca-profesionalmente-l_Te2YnnYVNR.png';
const IMG_IMPLANTES = '/img/magnific_retoca-profesionalmente-l_xgFK5rQjfW.jpg';
const IMG_ORTODONCIA = '/img/magnific_retoca-profesionalmente-l_YViA23xWeC.png';
const IMG_ESTETICA = '/img/magnific_retoca-profesionalmente-l_9RSOO6ENYZ.png';

function TreatmentCard({ title, queSrc, imgAlt, flipLayout, children }) {
  const textBlock = (
    <div className={`order-2 ${flipLayout ? 'lg:order-1' : ''}`}>
      <div
        className={`bg-surface-container-lowest p-6 sm:p-10 lg:p-16 rounded-xl editorial-shadow relative z-10 ${
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
    <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
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
    <main className="pt-24 md:pt-32 pb-16 md:pb-24">
      {/* ── HERO ── */}
      <header className="max-w-7xl mx-auto px-5 md:px-8 mb-16 md:mb-24">
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
      <section className="max-w-7xl mx-auto px-5 md:px-8 space-y-20 md:space-y-32">
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
      <section className="mt-20 md:mt-32 max-w-4xl mx-auto px-5 md:px-8 text-center">
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
            { icon: 'clinical_notes', label: 'Diagnóstico preciso' },
            { icon: 'verified', label: 'Materiales de calidad' },
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
