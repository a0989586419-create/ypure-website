'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a] px-6 text-center">
      {/* Error icon */}
      <div className="mb-6">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cloud with X */}
          <path
            d="M65 40C65 40 68 33 63 28C58 23 52 27 52 27C52 27 49 18 40 18C31 18 27 27 27 27C27 27 19 24 16 31C13 38 20 42 20 42H65Z"
            fill="rgba(229, 185, 76, 0.1)"
            stroke="rgba(229, 185, 76, 0.4)"
            strokeWidth="1.5"
          />
          {/* X mark */}
          <path
            d="M34 50L46 62M46 50L34 62"
            stroke="#E5B94C"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Error message */}
      <h1 className="text-xl font-bold text-white mb-2">
        Oops! something went wrong
      </h1>
      <p className="text-white/50 text-sm mb-2 max-w-md">
        The page has encountered an unexpected error. Please try refreshing the page or come back later.
      </p>
      {error.digest && (
        <p className="text-white/30 text-xs mb-6 font-mono">
          Error code: {error.digest}
        </p>
      )}

      {/* Retry button */}
      <button
        onClick={reset}
        className="px-8 py-3 rounded-full font-semibold text-[#0a0a0a] transition-all duration-300 hover:scale-105 cursor-pointer"
        style={{
          background: 'linear-gradient(135deg, #E5B94C, #F0D078)',
          boxShadow: '0 0 20px rgba(229, 185, 76, 0.3)',
        }}
      >
        Retry
      </button>

      {/* Home link */}
      <a
        href="/"
        className="mt-4 text-sm text-white/40 hover:text-[#E5B94C] transition-colors"
      >
        Back to home page
      </a>
    </div>
  );
}
