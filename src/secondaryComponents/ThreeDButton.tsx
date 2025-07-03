import { type JSX, type ReactNode } from "react";

type ThreeDButtonProps = {
  children: ReactNode;
  handClickSound: () => void; // Fix the type
};

export default function ThreeDButton({ children, handClickSound }: ThreeDButtonProps): JSX.Element {
  return (
    <div className="w-fit h-fit" onClick={handClickSound}> {/* Remove the arrow function wrapper */}
      <button
        className="relative inline-block px-4.75 py-2.5 font-mono font-bold text-lg text-black bg-blue-600/30 border-4 border-black cursor-pointer select-none
  shadow-[6px_6px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-all duration-150 ease-out 
  active:shadow-[3px_3px_0px_0px_black] active:translate-x-1 active:translate-y-1"
      >
        {children}
      </button>
    </div>
  );
}

