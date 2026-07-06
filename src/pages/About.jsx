import Icon from '../components/ui/Icon';

const IMG_HERO = '/img/magnific_retoca-profesionalmente-l_ONLUS1Eynm.png';
const IMG_DIRECTOR = '/img/magnific_retoca-profesionalmente-l_IaMXdRitvE.png';
const IMG_TOOLS = '/img/magnific_retoca-profesionalmente-l_XtcDMJLBfo.png';

export default function About() {
  return (
    <main className="pt-20">
      {/* ── HERO ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Copy */}
            <div className="lg:col-span-7 z-10">
              <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
                Nuestra Filosofía
              </span>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface leading-tight tracking-tight mb-8">
                Odontología sin <br />
                <span className="text-primary italic">artificios.</span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
                En A Estrada, entendemos que ir al dentista no se trata solo de salud, sino de
                confianza. No somos una franquicia. Somos vecinos cuidando de vecinos con la
                honestidad por delante.
              </p>
            </div>

            {/* Image */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden editorial-shadow transform rotate-2">
                <img src={IMG_HERO} className="w-full h-full object-cover" alt="Equipo clínico" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-8 rounded-lg editorial-shadow max-w-xs hidden md:block">
                <p className="font-headline font-bold text-primary text-2xl mb-2">Honestidad.</p>
                <p className="text-sm text-on-surface-variant">
                  Solo el tratamiento que necesitas. Ni más, ni menos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLINICAL DIRECTOR PROTOCOL ── */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0 editorial-shadow">
            {/* Text */}
            <div className="p-12 lg:p-20 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <Icon name="verified_user" />
                </div>
                <h2 className="font-headline text-3xl font-bold text-on-surface">
                  Revisión de Casos Complejos
                </h2>
              </div>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                En CCD A Estrada, ningún diagnóstico complejo se deja al azar. Todos los planes de
                tratamiento son revisados personalmente por nuestro Director Clínico.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Icon name="clinical_notes" className="text-secondary" />
                  <div>
                    <p className="font-bold text-on-surface">Validación Doble</p>
                    <p className="text-sm text-on-surface-variant">
                      Cruzamos opiniones médicas para asegurar el éxito del tratamiento.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="health_and_safety" className="text-secondary" />
                  <div>
                    <p className="font-bold text-on-surface">Solo lo necesario</p>
                    <p className="text-sm text-on-surface-variant">
                      Si un tratamiento no es estrictamente necesario para tu salud o tu estética,
                      no te lo propondremos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="h-full min-h-[400px] relative">
              <img
                src={IMG_DIRECTOR}
                className="w-full h-full object-cover"
                alt="Diplomas y acreditaciones del equipo en la clínica"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES GRID ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-4 tracking-tight">
              Cómo Trabajamos
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">
              Nuestro compromiso está con las personas de A Estrada, no con las estadísticas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Claridad Total */}
            <div className="md:col-span-2 bg-surface-container rounded-lg p-10 flex flex-col justify-end min-h-[320px] relative overflow-hidden group">
              <div className="z-10">
                <h3 className="font-headline text-2xl font-bold text-primary mb-2">
                  Claridad Total
                </h3>
                <p className="max-w-md text-on-surface-variant">
                  Explicamos cada fase de tu tratamiento sin tecnicismos innecesarios. Queremos que
                  entiendas el 'por qué' de cada decisión.
                </p>
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary-container/30 rounded-full blur-3xl transition-transform group-hover:scale-125 pointer-events-none" />
            </div>

            {/* Cercanía */}
            <div className="bg-surface-container-highest rounded-lg p-10 flex flex-col">
              <Icon name="handshake" className="text-4xl text-primary mb-6 block" />
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">
                Trato Cercano
              </h3>
              <p className="text-on-surface-variant">
                No somos una centralita. Cuando nos llamas, hablas directamente con nosotros.
              </p>
            </div>

            {/* Tecnología */}
            <div className="bg-primary text-on-primary rounded-lg p-10 flex flex-col">
              <Icon name="auto_awesome" className="text-4xl text-primary-fixed-dim mb-6 block" />
              <h3 className="font-headline text-2xl font-bold mb-2">Tecnología Útil</h3>
              <p className="opacity-80">
                Incorporamos solo los equipos que mejoran tu diagnóstico y tu comodidad durante el
                tratamiento.
              </p>
            </div>

            {/* Atención al detalle */}
            <div className="md:col-span-2 bg-secondary text-white rounded-lg p-10 flex items-center gap-8">
              <div className="hidden sm:block w-32 h-32 rounded-lg overflow-hidden shrink-0">
                <img
                  src={IMG_TOOLS}
                  className="w-full h-full object-cover grayscale opacity-50"
                  alt="Instrumental dental"
                />
              </div>
              <div>
                <h3 className="font-headline text-2xl font-bold mb-2">Atención al Detalle</h3>
                <p className="opacity-90">
                  Desde la limpieza del aire hasta el silencio en las salas de espera, cuidamos
                  cada aspecto para reducir tu ansiedad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="bg-gradient-primary rounded-xl p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-headline text-4xl font-extrabold mb-6 tracking-tight">
              ¿Buscas una opinión honesta?
            </h2>
            <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
              Estaremos encantados de revisar tu caso. Sin presiones, solo medicina dental de
              calidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="bg-surface text-primary px-10 py-4 rounded-md font-label font-bold uppercase tracking-widest text-sm hover:bg-surface-container transition-colors"
              >
                Solicitar Consulta
              </a>
              <a
                href="/tratamientos"
                className="border border-white/30 text-white px-10 py-4 rounded-md font-label font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors"
              >
                Ver Tratamientos
              </a>
            </div>
          </div>
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl pointer-events-none" />
        </div>
      </section>
    </main>
  );
}
