import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Icon from '../ui/Icon';

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/tratamientos', label: 'Tratamientos' },
  { to: '/sobre-nosotros', label: 'Quiénes Somos' },
  { to: '/por-que-nosotros', label: 'Por Qué Nosotros' },
  { to: '/contacto', label: 'Contacto' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Cierra el menú al cambiar de página
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Bloquea el scroll del body mientras el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed top-0 w-full z-50 glass-header">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20">
        <NavLink to="/" className="flex items-center">
          <img
            src="/img/logo-ccd-horizontal.png"
            alt="CCD A Estrada — Centro Clínico Dental"
            className="h-7 md:h-9 w-auto"
          />
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-8 items-center font-headline tracking-tight font-semibold">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                isActive
                  ? 'text-primary border-b-2 border-secondary pb-1'
                  : 'text-on-surface-variant hover:text-primary transition-colors'
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Llamar: botón completo en desktop, icono en móvil */}
          <a
            href="tel:986584974"
            className="hidden sm:inline-flex cta-gradient text-white px-5 md:px-6 py-2.5 rounded-lg text-sm font-bold tracking-wider uppercase transition-transform active:scale-95 shadow-lg"
          >
            Llamar ahora
          </a>
          <a
            href="tel:986584974"
            aria-label="Llamar a la clínica"
            className="sm:hidden w-10 h-10 flex items-center justify-center rounded-lg cta-gradient text-white active:scale-95 shadow"
          >
            <Icon name="call" className="text-xl" />
          </a>

          {/* Hamburguesa */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-primary active:scale-95 transition-transform"
          >
            <Icon name={open ? 'close' : 'menu'} className="text-3xl" />
          </button>
        </div>
      </nav>

      {/* Overlay para cerrar tocando fuera */}
      {open && (
        <div
          className="md:hidden fixed inset-0 top-16 bg-on-surface/20 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Panel del menú móvil */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-surface-container-lowest border-t border-outline-variant/15 shadow-xl overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-5 py-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `py-3.5 px-3 rounded-lg font-headline font-semibold text-lg transition-colors ${
                  isActive
                    ? 'text-primary bg-secondary-container/40'
                    : 'text-on-surface-variant hover:bg-surface-container-low'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href="tel:986584974"
            className="mt-3 cta-gradient text-white py-4 rounded-lg text-center font-bold tracking-wider uppercase text-sm shadow-lg flex items-center justify-center gap-2"
          >
            <Icon name="call" className="text-lg" />
            986 584 974
          </a>
        </div>
      </div>
    </header>
  );
}
