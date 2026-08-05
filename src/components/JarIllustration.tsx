import React from 'react';

interface JarIllustrationProps {
  progressPercentage: number;
  className?: string;
}

export const JarIllustration: React.FC<JarIllustrationProps> = ({
  progressPercentage,
  className = '',
}) => {
  // Bound percentage between 0 and 100
  const pct = Math.min(Math.max(progressPercentage, 0), 100);

  // Jar body vertical range:
  // Bottom inner y = 240
  // Top liquid level (100% full) y = 90
  const bottomY = 240;
  const topY = 90;
  const totalFillHeight = bottomY - topY; // 150px range

  const liquidTopY = bottomY - (pct / 100) * totalFillHeight;
  const liquidHeight = bottomY - liquidTopY;

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 240 270"
        className="w-32 h-36 sm:w-36 sm:h-40 overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Mint Liquid Fill Gradient */}
          <linearGradient id="mintLiquid" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9bf8dc" stopOpacity="0.95" />
            <stop offset="30%" stopColor="#70f3c5" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#48e2b2" stopOpacity="0.95" />
          </linearGradient>

          {/* Mint Surface Gradient */}
          <linearGradient id="mintSurface" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c3fbe9" />
            <stop offset="50%" stopColor="#86f4d0" />
            <stop offset="100%" stopColor="#5fe8be" />
          </linearGradient>

          {/* Golden Coin Gradient */}
          <linearGradient id="coinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="40%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>

          <linearGradient id="coinRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef9c3" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>

          {/* Soft Glow Effect for Liquid Base */}
          <filter id="liquidGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Clip path matching interior of jar */}
          <clipPath id="jarInnerClip">
            <path d="M 52 72 C 52 72, 48 215, 52 225 C 56 238, 72 245, 120 245 C 168 245, 184 238, 188 225 C 192 215, 188 72, 188 72 Z" />
          </clipPath>
        </defs>

        {/* Shadow under Jar */}
        <ellipse cx="120" cy="250" rx="65" ry="10" fill="#70f3c5" opacity="0.35" filter="url(#liquidGlow)" />

        {/* --- LIQUID FILL (CLIP TO JAR INTERIOR) --- */}
        <g clipPath="url(#jarInnerClip)">
          {pct > 0 && (
            <>
              {/* Main Liquid Column */}
              <rect
                x="40"
                y={liquidTopY}
                width="160"
                height={liquidHeight + 20}
                fill="url(#mintLiquid)"
                className="transition-all duration-700 ease-out"
              />

              {/* Top Liquid Surface Oval (Meniscus) */}
              <ellipse
                cx="120"
                cy={liquidTopY}
                rx="68"
                ry="12"
                fill="url(#mintSurface)"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeOpacity="0.8"
                className="transition-all duration-700 ease-out"
              />

              {/* Liquid Subtle Bottom Glow */}
              <rect
                x="45"
                y="225"
                width="150"
                height="18"
                rx="9"
                fill="#ffffff"
                opacity="0.2"
              />
            </>
          )}
        </g>

        {/* --- PERCENTAGE DISPLAY ALWAYS CENTERED IN JAR --- */}
        <text
          x="120"
          y="165"
          textAnchor="middle"
          dominantBaseline="central"
          fill="#064e3b"
          fontSize="30"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
          letterSpacing="-0.02em"
          className="select-none transition-all duration-500 ease-out pointer-events-none"
          style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.95), 0 1px 3px rgba(0, 0, 0, 0.25)' }}
        >
          %{pct}
        </text>

        {/* --- COINS RESTING ON LIQUID / BOTTOM --- */}
        <g transform={`translate(0, ${pct > 0 ? Math.max(liquidTopY - 170, -100) : 0})`} className="transition-transform duration-700 ease-out">
          {/* Landed Coin 1 */}
          <g transform="translate(105, 172) rotate(-8)">
            <ellipse cx="0" cy="0" rx="22" ry="10" fill="url(#coinRim)" stroke="#d97706" strokeWidth="1.5" />
            <ellipse cx="0" cy="-2" rx="18" ry="7.5" fill="url(#coinGrad)" />
          </g>
          {/* Landed Coin 2 */}
          <g transform="translate(138, 168) rotate(12)">
            <ellipse cx="0" cy="0" rx="24" ry="11" fill="url(#coinRim)" stroke="#d97706" strokeWidth="1.5" />
            <ellipse cx="0" cy="-2" rx="20" ry="8.5" fill="url(#coinGrad)" />
          </g>
        </g>

        {/* --- FLOATING COINS IN AIR --- */}
        {/* Upper Floating Coin 1 */}
        <g transform="translate(120, 80) rotate(-22)">
          <ellipse cx="0" cy="0" rx="22" ry="9.5" fill="url(#coinRim)" stroke="#d97706" strokeWidth="1.5" />
          <ellipse cx="0" cy="-2" rx="18" ry="7" fill="url(#coinGrad)" />
        </g>

        {/* Upper Floating Coin 2 */}
        <g transform="translate(88, 118) rotate(15)">
          <ellipse cx="0" cy="0" rx="23" ry="10" fill="url(#coinRim)" stroke="#d97706" strokeWidth="1.5" />
          <ellipse cx="0" cy="-2" rx="19" ry="7.5" fill="url(#coinGrad)" />
        </g>

        {/* Upper Floating Coin 3 */}
        <g transform="translate(148, 110) rotate(-10)">
          <ellipse cx="0" cy="0" rx="24" ry="10.5" fill="url(#coinRim)" stroke="#d97706" strokeWidth="1.5" />
          <ellipse cx="0" cy="-2" rx="20" ry="8" fill="url(#coinGrad)" />
        </g>

        {/* --- SPARKLES (GOLDEN 4-POINT STARS) --- */}
        {/* Sparkle 1 */}
        <path d="M 80 82 Q 80 75 73 75 Q 80 75 80 68 Q 80 75 87 75 Q 80 75 80 82 Z" fill="#fbbf24" />
        {/* Sparkle 2 */}
        <path d="M 152 68 Q 152 62 146 62 Q 152 62 152 56 Q 152 62 158 62 Q 152 62 152 68 Z" fill="#f59e0b" />
        {/* Sparkle 3 */}
        <path d="M 165 140 Q 165 131 156 131 Q 165 131 165 122 Q 165 131 174 131 Q 165 131 165 140 Z" fill="#fbbf24" />
        {/* Sparkle 4 */}
        <path d="M 72 148 Q 72 143 67 143 Q 72 143 72 138 Q 72 143 77 143 Q 72 143 72 148 Z" fill="#facc15" />

        {/* --- GLASS JAR OUTLINE & LID --- */}
        {/* Jar Outer Glass Outline (Thick Black Path matching reference image) */}
        <path
          d="M 68 52 
             C 68 52, 50 68, 50 78
             L 50 220
             C 50 238, 70 248, 120 248
             C 170 248, 190 238, 190 220
             L 190 78
             C 190 68, 172 52, 172 52
             Z"
          fill="none"
          stroke="#0f172a"
          strokeWidth="5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Glass Vertical Highlight Line on Left */}
        <path
          d="M 64 68 L 64 100 M 64 120 L 64 145"
          stroke="#0f172a"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Top Black Lid (Solid rounded cap matching attached image) */}
        <g>
          {/* Main Top Lid Block */}
          <rect x="52" y="10" width="136" height="34" rx="17" fill="#0f172a" />
          {/* Lid Lower Ridge Ring */}
          <rect x="58" y="38" width="124" height="14" rx="7" fill="#0f172a" />
          {/* Subtle Lid Shine */}
          <rect x="68" y="16" width="30" height="6" rx="3" fill="#334155" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
};
