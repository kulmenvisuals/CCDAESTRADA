import Icon from '../components/ui/Icon';

const IMG_MAP =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDlEMvw8lUkyHLM2yDm8mPdLPcxn8wqHH07vwrZzFb93hFfB41C35Tc9zcPGADGWv6igvgpZVBGH3q0Xjad9qZ3ve7Lom3U5kXvqNPIHBtt_PYVL3KYVcZzwuEL6NkRlDbJEznG6Dq9DYhizI22DePrZpgjGnDpZKGYd9AdqqHVnVnY8SIuVaaZxH3lkJRD2W9s096HM2HLaKk72YmQC1AVscZ6QfB2BuHEqhnF7sBnszBYq9vXpucwFUfwTCIITpj8WHlEkW9XRzca';

export default function Contact() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* ── HERO TITLE ── */}
      <div className="mb-16 md:mb-24">
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-primary leading-none mb-6">
          Estamos a tu disposición.
        </h1>
        <p className="text-on-surface-variant text-xl max-w-2xl leading-relaxed">
          Visítanos en el centro de A Estrada o contáctanos por el canal que prefieras. Estamos
          aquí para cuidar de tu sonrisa.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* ── LEFT COLUMN: Contact info + map ── */}
        <div className="lg:col-span-5 space-y-12">
          {/* Info card */}
          <div className="bg-surface-container-low p-8 md:p-12 rounded-xl">
            <h2 className="font-headline text-2xl font-bold text-primary mb-8">
              Información de Contacto
            </h2>

            <div className="space-y-10">
              {/* Address */}
              <div className="flex gap-6 items-start">
                <Icon name="location_on" className="text-3xl text-primary" />
                <div>
                  <h3 className="font-headline font-bold text-lg mb-1">Ubicación</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Calvo Sotelo 29,
                    <br />
                    Centro Comercial San Antón,
                    <br />
                    36680 A Estrada, Pontevedra.
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-6 items-start">
                <Icon name="call" className="text-3xl text-primary" />
                <div>
                  <h3 className="font-headline font-bold text-lg mb-1">Teléfono</h3>
                  <a
                    className="text-2xl font-bold text-primary hover:underline decoration-2 underline-offset-4"
                    href="tel:986584974"
                  >
                    986 584 974
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-secondary-container p-6 rounded-lg flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-4">
                  <Icon name="chat" className="text-3xl text-on-secondary-container" />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-on-secondary-container opacity-80">
                      Rápido y Directo
                    </p>
                    <p className="font-bold text-on-secondary-container text-lg leading-tight">
                      WhatsApp Web
                    </p>
                  </div>
                </div>
                <Icon
                  name="arrow_forward"
                  className="text-on-secondary-container transform group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-sm group">
            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
              <img
                src={IMG_MAP}
                alt="Mapa de ubicación"
                className="w-full h-full object-cover grayscale opacity-50 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10" />
              <div className="absolute bg-white px-4 py-2 rounded-lg shadow-xl font-bold text-primary flex items-center gap-2">
                <Icon name="explore" />
                Ver en Google Maps
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN: Appointment form ── */}
        <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-editorial">
          <div className="mb-10">
            <h2 className="font-headline text-3xl font-bold text-primary mb-2">
              Solicita tu Cita
            </h2>
            <p className="text-on-surface-variant">
              Déjanos tus datos y te llamaremos lo antes posible para confirmar una hora que te
              convenga.
            </p>
          </div>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="ghost-border py-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  placeholder="Ej. Ana García"
                  className="w-full bg-transparent py-2 font-medium text-on-surface placeholder:text-outline-variant"
                />
              </div>
              <div className="ghost-border py-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                  Teléfono de contacto
                </label>
                <input
                  type="tel"
                  placeholder="Ej. 600 000 000"
                  className="w-full bg-transparent py-2 font-medium text-on-surface placeholder:text-outline-variant"
                />
              </div>
            </div>

            <div className="ghost-border py-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                Motivo de la visita
              </label>
              <select className="w-full bg-transparent py-2 font-medium text-on-surface appearance-none cursor-pointer">
                <option value="">Selecciona un tratamiento</option>
                <option value="revision">Revisión General</option>
                <option value="higiene">Higiene Dental</option>
                <option value="ortodoncia">Ortodoncia</option>
                <option value="implantes">Implantes</option>
                <option value="estetica">Estética Dental</option>
                <option value="otro">Otro motivo</option>
              </select>
            </div>

            <div className="ghost-border py-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                Mensaje (Opcional)
              </label>
              <textarea
                rows={3}
                placeholder="¿Quieres comentarnos algo más?"
                className="w-full bg-transparent py-2 font-medium text-on-surface placeholder:text-outline-variant resize-none"
              />
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full cta-gradient text-white py-5 rounded-lg font-bold text-lg tracking-widest uppercase shadow-xl hover:shadow-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-3"
              >
                Enviar Solicitud
                <Icon name="send" />
              </button>
              <p className="text-center text-xs text-outline-variant mt-6 px-4">
                Al hacer clic en enviar, aceptas nuestra política de privacidad y el tratamiento de
                tus datos para la gestión de citas.
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
