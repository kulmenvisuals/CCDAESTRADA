/**
 * Renders a Material Symbols Outlined icon.
 * @param {string} name - The icon ligature name (e.g. "call", "location_on")
 * @param {string} className - Additional Tailwind classes
 * @param {object} style - Inline style overrides (e.g. for FILL variation)
 */
export default function Icon({ name, className = '', style = {} }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={style}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
