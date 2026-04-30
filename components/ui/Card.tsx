import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div className={`glass-card rounded-2xl bg-white/5 ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
