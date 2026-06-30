import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  distance?: number;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 28,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Safety fallback: force visibility after a brief timeout if observer doesn't trigger
    const fallbackTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 1200 + delay);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          clearTimeout(fallbackTimeout);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px 100px 0px" }
    );

    observer.observe(el);
    return () => {
      clearTimeout(fallbackTimeout);
      observer.disconnect();
    };
  }, [delay]);

  const getInitialTransform = () => {
    switch (direction) {
      case "up":    return `translateY(${distance}px)`;
      case "left":  return `translateX(-${distance}px)`;
      case "right": return `translateX(${distance}px)`;
      case "none":  return "none";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : getInitialTransform(),
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
