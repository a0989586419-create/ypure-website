"use client";

interface StoreFrontProps {
  variant: 1 | 2 | 3;
  className?: string;
}

function Variant1() {
  return (
    <svg
      viewBox="0 0 280 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Ground */}
      <line x1="10" y1="160" x2="270" y2="160" stroke="#E5B94C" strokeWidth="1.5" />

      {/* Main building */}
      <rect x="30" y="50" width="220" height="110" rx="2" stroke="#E5B94C" strokeWidth="1.5" />

      {/* Striped awning */}
      <path d="M20 50 L260 50 L255 28 L25 28 Z" stroke="#E5B94C" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Awning stripes */}
      <line x1="70" y1="28" x2="65" y2="50" stroke="#E5B94C" strokeWidth="0.8" strokeOpacity="0.4" />
      <line x1="120" y1="28" x2="115" y2="50" stroke="#E5B94C" strokeWidth="0.8" strokeOpacity="0.4" />
      <line x1="170" y1="28" x2="165" y2="50" stroke="#E5B94C" strokeWidth="0.8" strokeOpacity="0.4" />
      <line x1="220" y1="28" x2="215" y2="50" stroke="#E5B94C" strokeWidth="0.8" strokeOpacity="0.4" />

      {/* Door */}
      <rect x="115" y="100" width="50" height="60" rx="2" stroke="#E5B94C" strokeWidth="1.5" />
      <line x1="140" y1="100" x2="140" y2="160" stroke="#E5B94C" strokeWidth="1" strokeOpacity="0.5" />
      <circle cx="133" cy="132" r="2" stroke="#E5B94C" strokeWidth="1" />
      <circle cx="147" cy="132" r="2" stroke="#E5B94C" strokeWidth="1" />

      {/* Window left */}
      <rect x="45" y="65" width="55" height="40" rx="2" stroke="#E5B94C" strokeWidth="1.5" />
      <line x1="72.5" y1="65" x2="72.5" y2="105" stroke="#E5B94C" strokeWidth="0.8" strokeOpacity="0.4" />
      <line x1="45" y1="85" x2="100" y2="85" stroke="#E5B94C" strokeWidth="0.8" strokeOpacity="0.4" />

      {/* Window right with WASH sign */}
      <rect x="180" y="65" width="55" height="40" rx="2" stroke="#E5B94C" strokeWidth="1.5" />
      <text
        x="207.5"
        y="90"
        textAnchor="middle"
        fill="#E5B94C"
        fontSize="11"
        fontWeight="bold"
        fontFamily="monospace"
        letterSpacing="2"
      >
        WASH
      </text>

      {/* Sign hanging */}
      <line x1="140" y1="15" x2="140" y2="28" stroke="#E5B94C" strokeWidth="1" strokeOpacity="0.5" />
      <rect x="125" y="8" width="30" height="10" rx="3" stroke="#E5B94C" strokeWidth="1" />
    </svg>
  );
}

function Variant2() {
  return (
    <svg
      viewBox="0 0 280 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Ground */}
      <line x1="10" y1="160" x2="270" y2="160" stroke="#E5B94C" strokeWidth="1.5" />

      {/* Main building - modern flat roof */}
      <rect x="25" y="35" width="230" height="125" rx="3" stroke="#E5B94C" strokeWidth="1.5" />

      {/* Flat roof line */}
      <line x1="20" y1="35" x2="260" y2="35" stroke="#E5B94C" strokeWidth="2" />

      {/* Large glass window */}
      <rect x="35" y="50" width="130" height="90" rx="2" stroke="#E5B94C" strokeWidth="1.5" />

      {/* Machines visible inside window */}
      {/* Machine 1 */}
      <rect x="45" y="80" width="32" height="35" rx="3" stroke="#E5B94C" strokeWidth="1" strokeOpacity="0.6" />
      <circle cx="61" cy="100" r="10" stroke="#E5B94C" strokeWidth="1" strokeOpacity="0.6" />
      <circle cx="61" cy="100" r="5" stroke="#E5B94C" strokeWidth="0.6" strokeOpacity="0.4" />

      {/* Machine 2 */}
      <rect x="85" y="80" width="32" height="35" rx="3" stroke="#E5B94C" strokeWidth="1" strokeOpacity="0.6" />
      <circle cx="101" cy="100" r="10" stroke="#E5B94C" strokeWidth="1" strokeOpacity="0.6" />
      <circle cx="101" cy="100" r="5" stroke="#E5B94C" strokeWidth="0.6" strokeOpacity="0.4" />

      {/* Machine 3 */}
      <rect x="125" y="80" width="32" height="35" rx="3" stroke="#E5B94C" strokeWidth="1" strokeOpacity="0.6" />
      <circle cx="141" cy="100" r="10" stroke="#E5B94C" strokeWidth="1" strokeOpacity="0.6" />
      <circle cx="141" cy="100" r="5" stroke="#E5B94C" strokeWidth="0.6" strokeOpacity="0.4" />

      {/* Glass door */}
      <rect x="185" y="60" width="55" height="100" rx="2" stroke="#E5B94C" strokeWidth="1.5" />
      <line x1="212.5" y1="60" x2="212.5" y2="160" stroke="#E5B94C" strokeWidth="0.8" strokeOpacity="0.4" />
      <circle cx="206" cy="112" r="2" stroke="#E5B94C" strokeWidth="1" />

      {/* Store name area */}
      <rect x="60" y="55" width="80" height="14" rx="2" stroke="#E5B94C" strokeWidth="0.8" strokeOpacity="0.5" />
      <line x1="70" y1="62" x2="130" y2="62" stroke="#E5B94C" strokeWidth="0.6" strokeOpacity="0.3" />

      {/* Roof sign */}
      <rect x="90" y="20" width="100" height="15" rx="3" stroke="#E5B94C" strokeWidth="1.2" />
      <text
        x="140"
        y="31"
        textAnchor="middle"
        fill="#E5B94C"
        fontSize="8"
        fontFamily="monospace"
        letterSpacing="3"
      >
        LAUNDRY
      </text>
    </svg>
  );
}

function Variant3() {
  return (
    <svg
      viewBox="0 0 280 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Ground */}
      <line x1="10" y1="160" x2="270" y2="160" stroke="#E5B94C" strokeWidth="1.5" />

      {/* Corner building - left wall */}
      <rect x="30" y="40" width="100" height="120" rx="2" stroke="#E5B94C" strokeWidth="1.5" />

      {/* Corner building - right wall (angled) */}
      <path
        d="M130 40 L230 55 L230 160 L130 160 Z"
        stroke="#E5B94C"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Corner entrance (angled) */}
      <path
        d="M110 110 L150 105 L150 160 L110 160 Z"
        stroke="#E5B94C"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Door handle */}
      <circle cx="145" cy="135" r="2" stroke="#E5B94C" strokeWidth="1" />

      {/* Left window */}
      <rect x="42" y="55" width="40" height="35" rx="2" stroke="#E5B94C" strokeWidth="1.2" />
      <line x1="62" y1="55" x2="62" y2="90" stroke="#E5B94C" strokeWidth="0.6" strokeOpacity="0.4" />

      {/* Right window */}
      <rect x="155" y="68" width="60" height="35" rx="2" stroke="#E5B94C" strokeWidth="1.2" />
      <line x1="185" y1="68" x2="185" y2="103" stroke="#E5B94C" strokeWidth="0.6" strokeOpacity="0.4" />

      {/* Awning over entrance */}
      <path
        d="M105 100 L155 95 L160 110 L100 115 Z"
        stroke="#E5B94C"
        strokeWidth="1"
        strokeOpacity="0.6"
        strokeLinejoin="round"
      />

      {/* Roof line */}
      <line x1="25" y1="40" x2="135" y2="40" stroke="#E5B94C" strokeWidth="2" />
      <line x1="130" y1="40" x2="235" y2="55" stroke="#E5B94C" strokeWidth="2" />

      {/* Potted plant */}
      {/* Pot */}
      <path
        d="M240 160 L240 140 L260 140 L260 160"
        stroke="#E5B94C"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Plant stems and leaves */}
      <line x1="250" y1="140" x2="250" y2="120" stroke="#E5B94C" strokeWidth="1" />
      <ellipse cx="243" cy="122" rx="7" ry="5" stroke="#E5B94C" strokeWidth="1" />
      <ellipse cx="257" cy="118" rx="7" ry="5" stroke="#E5B94C" strokeWidth="1" />
      <ellipse cx="250" cy="114" rx="6" ry="5" stroke="#E5B94C" strokeWidth="1" />

      {/* Corner sign */}
      <rect x="95" y="25" width="40" height="12" rx="3" stroke="#E5B94C" strokeWidth="1" />
      <line x1="115" y1="37" x2="115" y2="40" stroke="#E5B94C" strokeWidth="0.8" />
    </svg>
  );
}

export default function StoreFront({ variant, className = "" }: StoreFrontProps) {
  return (
    <div className={className}>
      {variant === 1 && <Variant1 />}
      {variant === 2 && <Variant2 />}
      {variant === 3 && <Variant3 />}
    </div>
  );
}
