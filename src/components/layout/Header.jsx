import { NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/tratamientos', label: 'Tratamientos' },
  { to: '/sobre-nosotros', label: 'Quiénes Somos' },
  { to: '/por-que-nosotros', label: 'Por Qué Nosotros' },
  { to: '/contacto', label: 'Contacto' },
];

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass-header">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <NavLink
          to="/"
          className="text-xl font-bold text-primary font-headline tracking-tight"
        >
          CCD A Estrada
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

        <a
          href="tel:986584974"
          className="cta-gradient text-white px-6 py-2.5 rounded-lg text-sm font-bold tracking-wider uppercase transition-transform active:scale-95 shadow-lg"
        >
          Llamar ahora
        </a>
      </nav>
    </header>
  );
}
