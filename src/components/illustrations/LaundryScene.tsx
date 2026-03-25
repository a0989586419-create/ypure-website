"use client";

interface LaundrySceneProps {
  className?: string;
}

export default function LaundryScene({ className = "" }: LaundrySceneProps) {
  return (
    <svg
      viewBox="0 0 400 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <style>
        {`
          @keyframes wifiPulse {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 1; }
          }
          .wifi-wave-1 { animation: wifiPulse 2s ease-in-out infinite; }
          .wifi-wave-2 { animation: wifiPulse 2s ease-in-out 0.4s infinite; }
          .wifi-wave-3 { animation: wifiPulse 2s ease-in-out 0.8s infinite; }
        `}
      </style>

      {/* Ground line */}
      <line x1="20" y1="210" x2="380" y2="210" stroke="#E5B94C" strokeWidth="1.5" />

      {/* Storefront - main structure */}
      <rect x="40" y="60" width="240" height="150" rx="2" stroke="#E5B94C" strokeWidth="1.5" />

      {/* Awning */}
      <path
        d="M30 60 L290 60 L280 35 L40 35 Z"
        stroke="#E5B94C"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Awning stripes */}
      <line x1="80" y1="35" x2="72" y2="60" stroke="#E5B94C" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="130" y1="35" x2="122" y2="60" stroke="#E5B94C" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="180" y1="35" x2="172" y2="60" stroke="#E5B94C" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="230" y1="35" x2="222" y2="60" stroke="#E5B94C" strokeWidth="1" strokeOpacity="0.5" />

      {/* WASH text on awning */}
      <text
        x="160"
        y="53"
        textAnchor="middle"
        fill="#E5B94C"
        fontSize="14"
        fontWeight="bold"
        fontFamily="monospace"
        letterSpacing="4"
      >
        WASH
      </text>

      {/* Door */}
      <rect x="55" y="130" width="40" height="80" rx="2" stroke="#E5B94C" strokeWidth="1.5" />
      <circle cx="88" cy="170" r="2" stroke="#E5B94C" strokeWidth="1.5" />

      {/* Washing machine 1 */}
      <rect x="110" y="120" width="50" height="55" rx="4" stroke="#E5B94C" strokeWidth="1.5" />
      <circle cx="135" cy="150" r="16" stroke="#E5B94C" strokeWidth="1.5" />
      <circle cx="135" cy="150" r="10" stroke="#E5B94C" strokeWidth="0.8" strokeOpacity="0.5" />
      {/* Control panel */}
      <line x1="115" y1="128" x2="155" y2="128" stroke="#E5B94C" strokeWidth="0.8" strokeOpacity="0.5" />
      <circle cx="120" cy="124" r="1.5" stroke="#E5B94C" strokeWidth="0.8" />
      <circle cx="127" cy="124" r="1.5" stroke="#E5B94C" strokeWidth="0.8" />

      {/* Washing machine 2 */}
      <rect x="168" y="120" width="50" height="55" rx="4" stroke="#E5B94C" strokeWidth="1.5" />
      <circle cx="193" cy="150" r="16" stroke="#E5B94C" strokeWidth="1.5" />
      <circle cx="193" cy="150" r="10" stroke="#E5B94C" strokeWidth="0.8" strokeOpacity="0.5" />
      <line x1="173" y1="128" x2="213" y2="128" stroke="#E5B94C" strokeWidth="0.8" strokeOpacity="0.5" />
      <circle cx="178" cy="124" r="1.5" stroke="#E5B94C" strokeWidth="0.8" />
      <circle cx="185" cy="124" r="1.5" stroke="#E5B94C" strokeWidth="0.8" />

      {/* Washing machine 3 */}
      <rect x="226" y="120" width="50" height="55" rx="4" stroke="#E5B94C" strokeWidth="1.5" />
      <circle cx="251" cy="150" r="16" stroke="#E5B94C" strokeWidth="1.5" />
      <circle cx="251" cy="150" r="10" stroke="#E5B94C" strokeWidth="0.8" strokeOpacity="0.5" />
      <line x1="231" y1="128" x2="271" y2="128" stroke="#E5B94C" strokeWidth="0.8" strokeOpacity="0.5" />
      <circle cx="236" cy="124" r="1.5" stroke="#E5B94C" strokeWidth="0.8" />
      <circle cx="243" cy="124" r="1.5" stroke="#E5B94C" strokeWidth="0.8" />

      {/* Person standing with phone */}
      {/* Head */}
      <circle cx="330" cy="115" r="10" stroke="#E5B94C" strokeWidth="1.5" />
      {/* Body */}
      <line x1="330" y1="125" x2="330" y2="170" stroke="#E5B94C" strokeWidth="1.5" />
      {/* Legs */}
      <line x1="330" y1="170" x2="320" y2="210" stroke="#E5B94C" strokeWidth="1.5" />
      <line x1="330" y1="170" x2="340" y2="210" stroke="#E5B94C" strokeWidth="1.5" />
      {/* Arm holding phone */}
      <line x1="330" y1="140" x2="350" y2="155" stroke="#E5B94C" strokeWidth="1.5" />
      {/* Phone */}
      <rect x="347" y="150" width="10" height="16" rx="2" stroke="#E5B94C" strokeWidth="1.5" />
      {/* Other arm */}
      <line x1="330" y1="140" x2="315" y2="160" stroke="#E5B94C" strokeWidth="1.5" />

      {/* Wi-Fi waves from machines */}
      {/* Wi-Fi set 1 - above machine 1 */}
      <path
        d="M128 100 A12 12 0 0 1 142 100"
        stroke="#E5B94C"
        strokeWidth="1.2"
        className="wifi-wave-1"
      />
      <path
        d="M124 93 A18 18 0 0 1 146 93"
        stroke="#E5B94C"
        strokeWidth="1.2"
        className="wifi-wave-2"
      />
      <path
        d="M120 86 A24 24 0 0 1 150 86"
        stroke="#E5B94C"
        strokeWidth="1.2"
        className="wifi-wave-3"
      />

      {/* Wi-Fi set 2 - above machine 3 */}
      <path
        d="M244 100 A12 12 0 0 1 258 100"
        stroke="#E5B94C"
        strokeWidth="1.2"
        className="wifi-wave-1"
      />
      <path
        d="M240 93 A18 18 0 0 1 262 93"
        stroke="#E5B94C"
        strokeWidth="1.2"
        className="wifi-wave-2"
      />
      <path
        d="M236 86 A24 24 0 0 1 266 86"
        stroke="#E5B94C"
        strokeWidth="1.2"
        className="wifi-wave-3"
      />

      {/* Small Wi-Fi dot centers */}
      <circle cx="135" cy="104" r="1.5" fill="#E5B94C" className="wifi-wave-1" />
      <circle cx="251" cy="104" r="1.5" fill="#E5B94C" className="wifi-wave-1" />
    </svg>
  );
}
