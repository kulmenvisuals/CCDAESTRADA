import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-5 md:px-8">
        {/* Brand */}
        <div className="space-y-4">
          <div className="font-headline font-bold text-primary text-xl">CCD A Estrada</div>
          <p className="font-body text-sm leading-relaxed text-on-surface-variant max-w-xs">
            Tu clínica dental de confianza en el corazón de A Estrada. Excelencia clínica y trato cercano.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-headline font-bold text-primary mb-6">Navegación</h4>
          <ul className="space-y-4 font-body text-sm">
            <li>
              <Link className="text-on-surface-variant hover:text-secondary underline-offset-4 hover:underline" to="/tratamientos">
                Tratamientos
              </Link>
            </li>
            <li>
              <Link className="text-on-surface-variant hover:text-secondary underline-offset-4 hover:underline" to="#">
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link className="text-on-surface-variant hover:text-secondary underline-offset-4 hover:underline" to="#">
                Accesibilidad
              </Link>
            </li>
            <li>
              <Link className="text-on-surface-variant hover:text-secondary underline-offset-4 hover:underline" to="#">
                Contacto de Urgencias
              </Link>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-headline font-bold text-primary mb-6">Horario</h4>
          <ul className="font-body text-sm text-on-surface-variant space-y-2">
            <li className="flex justify-between">
              <span>Lunes - Viernes:</span>
              <span className="text-primary font-bold">9:30 - 20:30</span>
            </li>
            <li className="flex justify-between">
              <span>Sábados:</span>
              <span className="text-primary font-bold">Cita previa</span>
            </li>
            <li className="flex justify-between">
              <span>Domingos:</span>
              <span className="text-outline italic">Cerrado</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 mt-16 pt-8 border-t border-outline-variant/50 text-center">
        <address className="font-body text-sm leading-relaxed text-on-surface-variant not-italic">
          © {new Date().getFullYear()} Clínica Dental A Estrada · Rúa Calvo Sotelo 29, Centro
          Comercial San Antón, 36680 A Estrada (Pontevedra) · Tel:{' '}
          <a href="tel:986584974" className="hover:text-primary underline-offset-4 hover:underline">
            986 584 974
          </a>
        </address>
      </div>
    </footer>
  );
}
