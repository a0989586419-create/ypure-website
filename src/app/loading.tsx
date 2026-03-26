export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a]">
      {/* Cloud + Lightning SVG Animation */}
      <div className="relative mb-8">
        <svg
          width="120"
          height="100"
          viewBox="0 0 120 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-float"
        >
          {/* Cloud shape */}
          <path
            d="M95 55C95 55 100 45 92 38C84 31 76 36 76 36C76 36 72 24 58 24C44 24 38 36 38 36C38 36 26 32 22 42C18 52 28 58 28 58L95 55Z"
            fill="rgba(229, 185, 76, 0.15)"
            stroke="#E5B94C"
            strokeWidth="2"
            className="animate-pulse"
          />
          {/* Lightning bolt */}
          <path
            d="M58 52L50 68L60 66L54 82L70 60L60 62L66 52H58Z"
            fill="#E5B94C"
            className="origin-center"
            style={{
              animation: 'lightning-flash 2s ease-in-out infinite',
            }}
          />
        </svg>
      </div>

      {/* Brand text */}
      <h1
        className="text-2xl font-bold tracking-wider mb-6"
        style={{
          background: 'linear-gradient(135deg, #E5B94C 0%, #F0D078 50%, #E5B94C 100%)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'shimmer 3s linear infinite',
        }}
      >
        Cloud Monster
      </h1>

      {/* Loading bar */}
      <div className="w-48 h-1 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-[#E5B94C]"
          style={{
            animation: 'loading-bar 1.5s ease-in-out infinite',
          }}
        />
      </div>

      <p className="mt-4 text-white/40 text-sm tracking-wide">Loading...</p>

      <style>{`
        @keyframes lightning-flash {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
          52% { opacity: 0.2; }
          54% { opacity: 1; }
        }
        @keyframes loading-bar {
          0% { width: 0%; margin-left: 0; }
          50% { width: 70%; margin-left: 15%; }
          100% { width: 0%; margin-left: 100%; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
}
