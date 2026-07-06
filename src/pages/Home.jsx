import clinicaAestrada from '../assets/clinica-aestrada.webp';
import Icon from '../components/ui/Icon';

/* ─── Fotos reales aprobadas por el cliente (public/img) ─── */
const IMG_HERO = clinicaAestrada;
const IMG_IMPLANTES = '/img/magnific_retoca-profesionalmente-l_xgFK5rQjfW.jpg';
const IMG_ORTODONCIA = '/img/magnific_retoca-profesionalmente-l_YViA23xWeC.png';
const IMG_ESTETICA = '/img/magnific_retoca-profesionalmente-l_9RSOO6ENYZ.png';
const IMG_CTA_BG = '/img/magnific_retoca-profesionalmente-l_Pil7wqK42C.png';

export default function Home() {
  return (
    <main className="pt-20">
      {/* ── HERO ── */}
      <section className="relative min-h-[560px] md:min-h-[720px] lg:min-h-[870px] flex items-center overflow-hidden bg-surface py-12 lg:py-0">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full">
          {/* Copy */}
          <div className="lg:col-span-7 z-10">
            <h1 className="font-headline text-5xl lg:text-7xl font-extrabold text-primary leading-tight tracking-tighter mb-6">
              Deja de posponer el dentista.{' '}
              <span className="text-secondary">Empieza a solucionarlo.</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-xl mb-10">
              Diagnóstico claro, tratamientos completos y un equipo que te lo
              explica todo sin rodeos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contacto"
                className="cta-gradient text-white px-8 py-4 rounded-lg font-bold tracking-wide uppercase text-sm shadow-lg hover:opacity-95 transition-all"
              >
                Pide tu cita
              </a>
              <a
                href="tel:986584974"
                className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-lg font-bold tracking-wide uppercase text-sm hover:bg-surface-container-high transition-colors"
              >
                Llamar ahora
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src={IMG_HERO}
                alt="Fachada y recepción de la Clínica Dental A Estrada"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-xl shadow-editorial border border-outline-variant/10 max-w-[200px]">
              <p className="text-sm font-bold text-primary mb-1">Confianza Local</p>
              <p className="text-xs text-on-surface-variant">
                Atendiendo a nuestros vecinos de A Estrada desde hace más de una
                década.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BUILDERS ── */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: 'verified_user',
                title: '+15 años de experiencia',
                text: 'Trayectoria consolidada cuidando la salud bucodental de nuestra comunidad.',
              },
              {
                icon: 'clinical_notes',
                title: 'Diagnóstico supervisado',
                text: 'Cada plan de tratamiento es validado directamente por nuestro director odontológico.',
              },
              {
                icon: 'home_health',
                title: 'Tratamientos completos',
                text: 'Todo lo que necesitas en un solo centro, sin desplazamientos innecesarios.',
              },
            ].map(({ icon, title, text }) => (
              <div key={title} className="flex flex-col gap-4">
                <Icon name={icon} className="text-4xl text-secondary" />
                <h3 className="text-2xl font-headline font-bold text-primary">{title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REAL PROBLEMS ── */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-secondary font-bold tracking-widest uppercase text-xs">
                Te escuchamos primero
              </span>
              <h2 className="font-headline text-4xl font-extrabold text-primary mt-2">
                Si te pasa esto, te podemos ayudar
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'healing',
                title: 'Te duele pero lo estás dejando',
                text: 'Sabemos que el miedo o la falta de tiempo frenan. Te ofrecemos soluciones rápidas para eliminar el dolor hoy.',
              },
              {
                icon: 'person_pin',
                title: 'Has tenido malas experiencias',
                text: 'Muchos pacientes vienen de franquicias frías. Aquí recuperamos el trato humano y la explicación honesta.',
              },
              {
                icon: 'quiz',
                title: 'No sabes qué tratamiento necesitas',
                text: 'Presupuestos confusos en otros sitios. Nosotros desglosamos tu salud paso a paso sin términos técnicos.',
              },
            ].map(({ icon, title, text }) => (
              <div
                key={title}
                className="bg-surface-container-lowest p-10 rounded-xl border-b-4 border-secondary transition-transform hover:-translate-y-2"
              >
                <h4 className="text-xl font-headline font-bold text-primary mb-4">{title}</h4>
                <p className="text-on-surface-variant mb-6">{text}</p>
                <Icon name={icon} className="text-5xl text-outline-variant" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED SERVICES (BENTO) ── */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="font-headline text-4xl font-extrabold text-primary mb-16 text-center">
            Nuestras especialidades
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
            {/* Implantes — large */}
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl bg-primary min-h-[340px] md:min-h-0">
              <img
                src={IMG_IMPLANTES}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                alt="Implantes dentales"
              />
              <div className="absolute bottom-0 p-8 text-white">
                <h3 className="text-3xl font-headline font-bold mb-2">Implantes</h3>
                <p className="text-white/80 max-w-sm">
                  Recupera la funcionalidad y la confianza con tecnología de carga inmediata.
                </p>
              </div>
            </div>

            {/* Ortodoncia */}
            <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-xl bg-secondary min-h-[260px] md:min-h-0">
              <img
                src={IMG_ORTODONCIA}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                alt="Ortodoncia"
              />
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-2xl font-headline font-bold mb-1">Ortodoncia</h3>
                <p className="text-white/80">
                  Invisible o tradicional, diseñada para que tu sonrisa sea armónica y funcional.
                </p>
              </div>
            </div>

            {/* Estética */}
            <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-xl bg-primary-container min-h-[260px] md:min-h-0">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-container/55 to-transparent z-10" />
              <img
                src={IMG_ESTETICA}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                alt="Estética dental"
              />
              <div className="absolute bottom-0 p-6 text-white z-20">
                <h3 className="text-2xl font-headline font-bold mb-1">Estética</h3>
                <p className="text-white/80">
                  Blanqueamientos y carillas para que tu sonrisa refleje lo mejor de ti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-20">
            <h2 className="font-headline text-4xl font-extrabold text-primary mb-4">
              Así trabajamos
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
              Un proceso claro, sin sorpresas, para que llegues a cada cita con tranquilidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-outline-variant/30 z-0" />

            {[
              {
                num: '1',
                color: 'bg-primary',
                title: 'Diagnóstico claro',
                text: 'Pruebas precisas y tecnología digital para entender qué está pasando realmente en tu boca.',
              },
              {
                num: '2',
                color: 'bg-secondary',
                title: 'Explicación sencilla',
                text: 'Te lo explicamos todo con imágenes y palabras que entiendas. Resolvemos tus dudas antes de empezar.',
              },
              {
                num: '3',
                color: 'bg-primary-container',
                title: 'Tratamiento personalizado',
                text: 'Ejecución impecable bajo la supervisión de especialistas expertos en cada área.',
              },
            ].map(({ num, color, title, text }) => (
              <div key={num} className="relative z-10 text-center flex flex-col items-center">
                <div
                  className={`w-24 h-24 rounded-full ${color} flex items-center justify-center text-white text-3xl font-bold mb-8 shadow-xl`}
                >
                  {num}
                </div>
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">{title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 md:py-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="font-headline text-4xl font-extrabold text-primary mb-16 text-center">
            Lo que dicen nuestros pacientes
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                quote:
                  '"Después de años de miedo al dentista, por fin encontré un sitio donde me siento tranquila. Me explicaron todo tan bien que el miedo desapareció."',
                name: 'María García',
                role: 'Paciente de Ortodoncia',
                avatarClass: 'bg-secondary-container',
              },
              {
                quote:
                  '"Grandes profesionales. El trato es muy familiar y no te intentan vender tratamientos innecesarios. Transmiten mucha confianza."',
                name: 'Juan Rodríguez',
                role: 'Paciente de Implantes',
                avatarClass: 'bg-primary-fixed',
              },
            ].map(({ quote, name, role, avatarClass }) => (
              <div
                key={name}
                className="bg-surface-container-lowest p-8 rounded-xl shadow-sm max-w-md"
              >
                <div className="flex gap-1 text-secondary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="star"
                      className="text-xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    />
                  ))}
                </div>
                <p className="italic text-on-surface-variant mb-6">{quote}</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${avatarClass}`} />
                  <div>
                    <p className="font-bold text-primary">{name}</p>
                    <p className="text-xs text-on-surface-variant">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src={IMG_CTA_BG} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center relative z-10">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-white mb-8">
            Da el paso. Pide tu cita.
          </h2>
          <p className="text-xl text-white/80 mb-12">
            Estamos aquí para escucharte y encontrar la mejor solución para tu sonrisa. Primera
            visita con diagnóstico incluido.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="bg-secondary-container text-on-secondary-container px-10 py-5 rounded-lg font-bold tracking-wide uppercase shadow-2xl hover:scale-105 transition-transform"
            >
              Reservar Online
            </a>
            <a
              href="tel:986584974"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-lg font-bold tracking-wide uppercase hover:bg-white/20 transition-colors"
            >
              986 584 974
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
