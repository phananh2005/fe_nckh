export default function Pagination() {
  return (
    <nav className="flex items-center gap-4">
      <button
        aria-label="First page"
        className="flex items-center justify-center w-[24px] h-[24px] text-stone-600 hover:text-stone-900"
      >
        <svg
          width="7"
          height="13"
          viewBox="0 0 7 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7 12.1879L6.1871 13L0.22378 7.04294C0.08026 6.89742 0 6.70269 0 6.5C0 6.29731 0.08026 6.10258 0.22378 5.95706L6.1871 0L7 0.812883L1.30738 6.5L7 12.1879Z"
            fill="#737373"
          />
        </svg>
      </button>

      {[1, 2, 3].map((n) => (
        <button
          key={n}
          aria-label={`Page ${n}`}
          className={`w-[24px] h-[24px] flex items-center justify-center border-[0.5px] border-black p-[4px] bg-[#FFFFFF]`}
        >
          {n}
        </button>
      ))}

      <button
        aria-label="Next page"
        className="flex items-center justify-center w-[24px] h-[24px] text-stone-600 hover:text-stone-900"
      >
        <svg
          width="7"
          height="13"
          viewBox="0 0 7 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M-0.000479138 0.812118L0.798639 2.33967e-07L6.66087 5.95706C6.80196 6.10258 6.88086 6.29731 6.88086 6.5C6.88086 6.70269 6.80196 6.89742 6.66087 7.04294L0.798638 13L-0.000480116 12.1871L5.59564 6.5L-0.000479138 0.812118Z"
            fill="#737373"
          />
        </svg>
      </button>
    </nav>
  );
}
