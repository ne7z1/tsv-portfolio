"use client";

export default function HubToggle({ mode, setMode }) {
  return (
    <div
      className={`mx-auto w-full flex items-center transition-all duration-500 ease-in-out
        ${mode === "product"
          ? "max-w-[400px] h-[64px] p-2 bg-bg-secondary rounded-[16px] shadow-sm gap-m"
          : "max-w-[626px] h-[104px] p-[24px] bg-[var(--graphic-bg-secondary)] rounded-none justify-between"
        }
      `}
    >
      {mode === "product" ? (
        <button
          onClick={() => setMode("product")}
          className="flex-1 h-full rounded-lg bg-btn-primary text-btn-primary-text text-[16px] md:text-[18px] font-semibold shadow-lg flex items-center justify-center transition-all duration-200 whitespace-nowrap"
        >
          Продукт
        </button>
      ) : (
        <button
          onClick={() => setMode("product")}
          className="group flex items-center h-full text-[32px] text-white font-unbounded cursor-pointer border-none outline-none whitespace-nowrap"
        >
          <span className="font-extralight group-hover:font-black transition-[font-weight] duration-500 ease-in-out">
            Про
          </span>
          <span className="font-black group-hover:font-extralight transition-[font-weight] duration-500 ease-in-out">
            дукт
          </span>
        </button>
      )}

      {mode === "product" ? (
        <button
          onClick={() => setMode("graphic")}
          className="flex-1 h-full rounded-lg border-[2px] border-transparent font-semibold text-[16px] md:text-[18px] text-btn-secondary-text flex items-center justify-center transition-all duration-200 hover:border-btn-secondary-border hover:bg-btn-secondary-hover hover:text-btn-secondary-hover-text whitespace-nowrap"
        >
          Графика
        </button>
      ) : (
        <button
          onClick={() => setMode("graphic")}
          className="group flex items-center justify-center h-full px-[24px] text-[32px] text-white font-unbounded cursor-pointer bg-[var(--graphic-bg-primary)] rounded-none border-none outline-none ring-0 whitespace-nowrap"
        >
          <span className="font-extralight group-hover:font-black transition-[font-weight] duration-500 ease-in-out">
            Гра
          </span>
          <span className="font-black group-hover:font-extralight transition-[font-weight] duration-500 ease-in-out">
            фика
          </span>
        </button>
      )}
    </div>
  );
}