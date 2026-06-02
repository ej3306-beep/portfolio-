import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ContainerElement = "div" | "section" | "header" | "footer" | "article";

type ContainerProps<T extends ContainerElement = "div"> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export function Container<T extends ContainerElement = "div">({
  as,
  className = "",
  children,
  ...props
}: ContainerProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  return (
    <Tag className={`layout-container ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}
