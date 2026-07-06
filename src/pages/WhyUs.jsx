import Icon from '../components/ui/Icon';

const IMG_HERO = '/img/magnific_retoca-profesionalmente-l_ONLUS7rynm.png';
const IMG_TECH = '/img/magnific_retoca-profesionalmente-l_0pZnz4QTfW.png';
const IMG_TEAM_1 = '/img/personal-1.png';
const IMG_TEAM_2 = '/img/personal-2.png';
const IMG_TEAM_3 = '/img/personal-3.png';

export default function WhyUs() {
  return (
    <main className="pt-20">
      {/* ── HERO ── */}
      <section className="relative min-h-[716px] flex items-center px-5 md:px-8 overflow-hidden bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Copy */}
          <div className="lg:col-span-7 z-10">
            <span className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Nuestro compromiso
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface leading-[1.1] mb-8 tracking-tight">
              La confianza se construye <br />
              <span className="text-primary">con hechos, no con promesas.</span>
            </h1>
            <p className="text-on-surface-variant text-xl leading-relaxed max-w-2xl">
              En Centro Clínico Dental A Estrada te explicamos cada diagnóstico con claridad,
              sin tecnicismos y sin prisas, para que decidas con la información real que necesitas.
            </p>
          </div>

          {/* Image */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-low relative">
              <img
                src={IMG_HERO}
                alt="Interior de la clínica"
                className="w-full h-full object-cover grayscale-[20%] opacity-90"
              />
              <div className="absolute -bottom-8 -left-8 p-8 bg-surface-container-lowest shadow-2xl rounded-lg max-w-[280px]">
                <p className="font-headline font-bold text-primary text-lg mb-2">Más que una cita</p>
                <p className="text-on-surface-variant text-sm italic">
                  "Mi dentista me explicó por qué necesitaba el tratamiento usando mis propias
                  radiografías en pantalla gigante. Por fin lo entendí."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENTO GRID: REAL BENEFITS ── */}
      <section className="py-16 md:py-24 px-5 md:px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">
              ¿Por qué venir aquí?
            </h2>
            <p className="text-on-surface-variant font-medium">
              Estas son las razones, explicadas sin adornos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1: Transparency – wide */}
            <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-xl flex flex-col justify-between group hover:bg-white transition-colors duration-500">
              <div>
                <Icon name="visibility" className="text-4xl text-primary mb-6 block" />
                <h3 className="font-headline text-3xl font-bold text-on-surface mb-6">
                  Te explicamos exactamente qué tienes y qué vamos a hacer
                </h3>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
                  Usamos escáneres intraorales y cámaras de alta definición para que veas lo que
                  nosotros vemos. No tomamos decisiones por ti, te damos la información para que
                  las tomemos juntos.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/15 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                  <Icon name="verified" className="text-on-secondary-container" />
                </div>
                <span className="text-sm font-bold text-on-surface">
                  Transparencia visual garantizada
                </span>
              </div>
            </div>

            {/* Feature 2: No doubts – primary */}
            <div className="bg-primary p-10 rounded-xl flex flex-col justify-between text-on-primary">
              <div>
                <Icon name="forum" className="text-4xl text-on-primary-container mb-6 block" />
                <h3 className="font-headline text-3xl font-bold mb-6">No sales con dudas</h3>
                <p className="text-primary-fixed-dim text-lg leading-relaxed">
                  El tiempo en el gabinete no está cronometrado. Si necesitas 15 minutos más para
                  entender tu presupuesto o el postoperatorio, los tienes.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-container rounded-md text-xs font-bold">
                  Sin prisas
                </span>
                <span className="px-3 py-1 bg-primary-container rounded-md text-xs font-bold">
                  Atención Humana
                </span>
              </div>
            </div>

            {/* Feature 3: Local rooted – secondary */}
            <div className="bg-secondary p-10 rounded-xl text-on-secondary relative overflow-hidden">
              <div className="relative z-10">
                <Icon name="location_on" className="text-4xl text-secondary-fixed mb-6 block" />
                <h3 className="font-headline text-2xl font-bold mb-4">Estamos aquí, en A Estrada</h3>
                <p className="text-secondary-fixed-dim leading-relaxed">
                  No somos una franquicia, somos vecinos: nuestra reputación se construye cada
                  día, consulta a consulta.
                </p>
              </div>
              <Icon
                name="home_pin"
                className="absolute -bottom-8 -right-8 text-9xl opacity-10 pointer-events-none"
              />
            </div>

            {/* Feature 4: Honest tech – wide */}
            <div className="md:col-span-2 bg-surface-container-highest p-10 rounded-xl flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-1/3 aspect-square rounded-lg overflow-hidden grayscale">
                <img
                  src={IMG_TECH}
                  alt="Puesto clínico con radiografía digital en pantalla"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">
                  Tecnología con propósito
                </h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  Solo invertimos en tecnología que mejora tu recuperación o reduce tu dolor. Si no
                  aporta un beneficio real a tu salud, no lo usamos solo para parecer modernos.
                </p>
                <ul className="space-y-3">
                  {['TAC Dental 3D de baja radiación', 'Cirugía guiada por ordenador'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-semibold text-primary">
                      <Icon
                        name="check_circle"
                        className="text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST LAYER: ASYMMETRIC PROFILE ── */}
      <section className="py-16 md:py-24 px-5 md:px-8 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Image block */}
          <div className="w-full lg:w-1/2 relative pb-16 lg:pb-0">
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-xl">
                <img
                  src={IMG_TEAM_1}
                  className="w-full h-full object-cover"
                  alt="Marta Pousa, odontóloga en Centro Clínico Dental A Estrada"
                />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-xl mt-8">
                <img
                  src={IMG_TEAM_2}
                  className="w-full h-full object-cover"
                  alt="Odontóloga del equipo de Centro Clínico Dental A Estrada"
                />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-xl">
                <img
                  src={IMG_TEAM_3}
                  className="w-full h-full object-cover"
                  alt="Especialista del equipo de Centro Clínico Dental A Estrada"
                />
              </div>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 lg:left-auto lg:-right-12 lg:translate-x-0 bg-secondary-container p-6 rounded-lg max-w-xs shadow-lg">
              <p className="font-headline font-bold text-on-secondary-container italic text-lg leading-tight">
                "Cada plan de tratamiento lo revisamos como si fuera para nuestra propia familia."
              </p>
            </div>
          </div>

          {/* Text block */}
          <div className="w-full lg:w-1/2">
            <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-8 tracking-tight">
              Un equipo que se forma para cuidarte mejor
            </h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center">
                  <Icon name="history_edu" className="text-primary" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-on-surface mb-2">
                    Formación continua
                  </h4>
                  <p className="text-on-surface-variant">
                    Dedicamos más de 100 horas anuales a formación especializada, para ofrecerte
                    siempre el tratamiento más actualizado y seguro.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center">
                  <Icon name="health_and_safety" className="text-primary" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-on-surface mb-2">
                    Protocolos de Bioseguridad
                  </h4>
                  <p className="text-on-surface-variant">
                    Cumplimos y superamos los estándares de esterilización e higiene exigidos en
                    cada una de nuestras consultas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-24 px-5 md:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center text-on-primary">
          <h2 className="font-headline text-4xl font-bold mb-6">¿Hablamos de tu caso?</h2>
          <p className="text-primary-fixed-dim text-xl mb-10 max-w-2xl mx-auto">
            Pide una cita diagnóstica. Te escucharemos, te exploraremos y te daremos un plan claro.
            Sin compromisos y sin sorpresas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="bg-surface-container-lowest text-primary px-8 py-4 rounded-md font-label font-bold uppercase tracking-widest hover:bg-secondary-container transition-colors"
            >
              Pedir Cita Online
            </a>
            <a
              href="tel:986584974"
              className="border border-outline-variant/30 text-on-primary px-8 py-4 rounded-md font-label font-bold uppercase tracking-widest hover:bg-primary-container transition-colors"
            >
              Llamar al 986 584 974
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
