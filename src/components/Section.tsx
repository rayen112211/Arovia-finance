import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted" | "navy" | "cream" | "light-blue";
}

export function Section({ children, className = "", id, variant = "default" }: SectionProps) {
  const bgMap = {
    default: "bg-background",
    muted: "bg-muted",
    navy: "bg-navy text-primary-foreground",
    cream: "bg-cream",
    "light-blue": "bg-light-blue",
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
          <span className="w-8 h-[1px] bg-gold inline-block" />
          {label}
        </span>
      )}
      <div className="relative inline-block">
        <h2
          className={`font-display text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] tracking-tight ${
            light ? "text-primary-foreground" : "text-foreground"
          }`}
        >
          {title}
        </h2>
        <div className="h-1 w-24 bg-gold mt-4 rounded-full"></div>
      </div>
      {description && (
        <p
          className={`text-base sm:text-lg max-w-2xl leading-relaxed ${
            light ? "text-gold" : "text-gold/90"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
