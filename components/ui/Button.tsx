import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-primary text-white hover:opacity-90 transition-all",
  secondary:
    "glass-card border border-indigo-500/30 text-indigo-400 hover:bg-white/5 transition-all",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  icon?: ReactNode;
};

export function Button({
  variant = "primary",
  icon,
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`${variantStyles[variant]} ${className}`.trim()}
      {...props}
    >
      {icon ? (
        <span className="inline-flex items-center justify-center gap-2">
          {icon}
        </span>
      ) : null}
      {children}
    </button>
  );
}
