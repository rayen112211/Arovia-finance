import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted" | "navy";
}

export function Section({ children, className = "", id, variant = "default" }: SectionProps) {
  const bgMap = {
    default: "bg-background",
    muted: "bg-muted/30",
    navy: "bg-primary text-primary-foreground",
  };

  return (
    <section id={id} className={`${bgMap[variant]} ${className}`}>
      <div className="section-padding section-container">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeader({ label, title, description, align = "left", light = false }: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 mb-14 ${alignClass}`}>
      {label && (
        <span className="eyebrow">
          <span className="w-8 h-[1px] bg-gold/50 inline-block" />
          {label}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] tracking-tight ${
          light ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base sm:text-lg max-w-2xl leading-relaxed ${
            light ? "text-primary-foreground/70" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
