import Image from "next/image";
import { ReactNode } from "react";

interface buttonProps {
  variant: "primary" | "secondary";
  children: ReactNode;
}
enum buttonState {
  primary = "bg-black border-white text-white",
  secondary = "bg-white border-black text-black",
}
export default function Button({ variant, children }: buttonProps) {
  return (
    <button
      className={`${buttonState[variant]} p-2 border-2 rounded-xl uppercase`}
    >
      {children}
    </button>
  );
}
