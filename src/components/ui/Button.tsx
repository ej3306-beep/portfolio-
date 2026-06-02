import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "accent";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  children: ReactNode;
};

const variantClass: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
};

export function Button({
  variant = "primary",
  className = "",
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${variantClass[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
