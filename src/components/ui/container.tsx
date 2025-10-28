import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}

export function Container({ children, size = "lg" }: ContainerProps) {
  const maxWidth = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
  }[size];

  return (
    <div className={`${maxWidth} mx-auto px-6 md:px-8 lg:px-12`}>
      {children}
    </div>
  );
}
