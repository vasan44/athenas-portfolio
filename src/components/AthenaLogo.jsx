import logoSrc from '../athenas-logo.png';

export function AthenaLogo({ className = '' }) {
  return (
    <img
      className={`athena-logo${className ? ` ${className}` : ''}`}
      src={logoSrc}
      alt="Athena Solutions logo"
    />
  );
}
