/**
 * Decorative embroidery-inspired flourish/divider components
 */

export function Flourish({ className = "", color = "#c45d3e" }: { className?: string; color?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <svg width="80" height="20" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 10 Q10 0 20 10 Q30 20 40 10"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
        <circle cx="5" cy="10" r="1.5" fill={color} opacity="0.4" />
        <circle cx="15" cy="5" r="1" fill={color} opacity="0.3" />
        <circle cx="35" cy="15" r="1" fill={color} opacity="0.3" />
      </svg>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 0 L7.5 4.5 L12 6 L7.5 7.5 L6 12 L4.5 7.5 L0 6 L4.5 4.5 Z" fill={color} opacity="0.5" />
      </svg>
      <svg width="80" height="20" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M40 10 Q50 0 60 10 Q70 20 80 10"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
        <circle cx="45" cy="5" r="1" fill={color} opacity="0.3" />
        <circle cx="65" cy="15" r="1" fill={color} opacity="0.3" />
        <circle cx="75" cy="10" r="1.5" fill={color} opacity="0.4" />
      </svg>
    </div>
  );
}

export function FloralCorner({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${flip ? "scale-x-[-1]" : ""}`}
    >
      <path d="M10 110 Q10 60 40 40 Q20 70 30 90" stroke="#d4a24e" strokeWidth="1" opacity="0.3" fill="none" />
      <path d="M10 110 Q30 80 60 70 Q35 85 20 100" stroke="#c45d3e" strokeWidth="1" opacity="0.3" fill="none" />
      <path d="M10 110 Q50 100 70 80" stroke="#7b4a6e" strokeWidth="0.8" opacity="0.2" fill="none" />
      <circle cx="40" cy="40" r="3" fill="#d4a24e" opacity="0.2" />
      <circle cx="60" cy="70" r="2.5" fill="#c45d3e" opacity="0.2" />
      <circle cx="30" cy="90" r="2" fill="#7b4a6e" opacity="0.15" />
      {/* Leaf shapes */}
      <path d="M35 45 Q40 35 45 45 Q40 42 35 45z" fill="#6e976e" opacity="0.2" />
      <path d="M55 65 Q60 58 65 65 Q60 62 55 65z" fill="#6e976e" opacity="0.2" />
    </svg>
  );
}

export function EmbroideryBorder({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg width="100%" height="24" viewBox="0 0 400 24" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <pattern id="emb-border" x="0" y="0" width="40" height="24" patternUnits="userSpaceOnUse">
          <path d="M0 12 Q10 2 20 12 Q30 22 40 12" stroke="#d4a24e" strokeWidth="1.2" fill="none" opacity="0.4" />
          <circle cx="20" cy="12" r="2" fill="#c45d3e" opacity="0.3" />
          <path d="M18 10 L20 6 L22 10" stroke="#7b4a6e" strokeWidth="0.8" fill="none" opacity="0.25" />
          <path d="M18 14 L20 18 L22 14" stroke="#7b4a6e" strokeWidth="0.8" fill="none" opacity="0.25" />
        </pattern>
        <rect width="400" height="24" fill="url(#emb-border)" />
      </svg>
    </div>
  );
}
