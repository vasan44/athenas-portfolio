const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: 1 + ((i * 7) % 30) / 10,
  x: (i * 37) % 100,
  delay: (i * 0.43) % 8,
  duration: 8 + ((i * 5) % 60) / 10,
  opacity: 0.12 + ((i * 11) % 28) / 100,
}));

export function Particles() {
  return (
    <div className="particles" aria-hidden="true">
      {PARTICLES.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  );
}
