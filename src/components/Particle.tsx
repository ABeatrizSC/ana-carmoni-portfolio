export const Particle: React.FC<{ size?: number; left?: string; delay?: string }> = ({
  size = 4,
  left = '0%',
  delay = '0s',
}) => {
  return (
    <div
      className="absolute bg-secondary-color rounded-full animate-float"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left,
        bottom: '-10px',
        animationDelay: delay,
      }}
    />
  )
}