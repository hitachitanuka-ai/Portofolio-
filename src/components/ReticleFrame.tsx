import React from 'react';

interface ReticleFrameProps {
  className?: string;
  size?: number; // size of bracket arms in px
  color?: string; // Tailwind border color class, e.g. "border-white/80" or "border-black/60"
}

export const ReticleFrame: React.FC<ReticleFrameProps> = ({
  className = '',
  size = 14,
  color = 'border-white/90',
}) => {
  return (
    <div className={`pointer-events-none absolute inset-3 z-20 ${className}`}>
      {/* Top Left */}
      <span
        style={{ width: size, height: size }}
        className={`absolute top-0 left-0 border-t-2 border-l-2 ${color}`}
      />
      {/* Top Right */}
      <span
        style={{ width: size, height: size }}
        className={`absolute top-0 right-0 border-t-2 border-r-2 ${color}`}
      />
      {/* Bottom Left */}
      <span
        style={{ width: size, height: size }}
        className={`absolute bottom-0 left-0 border-b-2 border-l-2 ${color}`}
      />
      {/* Bottom Right */}
      <span
        style={{ width: size, height: size }}
        className={`absolute bottom-0 right-0 border-b-2 border-r-2 ${color}`}
      />
    </div>
  );
};
