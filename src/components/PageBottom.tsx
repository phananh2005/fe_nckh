import React from "react";

export default function PageBottom(): JSX.Element {
  return (
    <footer className="flex justify-center py-6">
      <nav className="flex items-center gap-4">
        <button
          aria-label="First page"
          className="flex items-center gap-2 px-2 py-1 text-stone-600 hover:text-stone-900"
        >
          <span className="inline-block w-0.5 h-5 bg-stone-300" aria-hidden />
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M15 6L9 12L15 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="flex items-center gap-3">
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              aria-label={`Page ${n}`}
              className={`w-10 h-10 flex items-center justify-center border border-stone-300 bg-white text-sm font-medium text-stone-800 rounded shadow-sm hover:shadow transition ${n === 1 ? "" : ""}`}
            >
              {n}
            </button>
          ))}
        </div>

        <button
          aria-label="Next page"
          className="p-2 text-stone-600 hover:text-stone-900"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M9 6L15 12L9 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </nav>
    </footer>
  );
}
