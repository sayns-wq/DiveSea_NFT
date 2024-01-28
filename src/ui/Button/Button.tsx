import Image from "next/image";
import { ReactNode } from "react";

enum buttonState {
  primary = "bg-black border-white text-white",
  secondary = "bg-transparent border-black text-black",
  white = "bg-white border-white text-black",
}
interface buttonProps {
  variant: "primary" | "secondary" | "white";
  children: ReactNode;
}

export default function Button({ variant, children }: buttonProps) {
  return (
    <button
      className={`${buttonState[variant]} p-2 border-2 rounded-xl font-semibold w-fit sm:p-4`}
    >
      {children}
    </button>
  );
}
