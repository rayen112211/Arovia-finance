import React, { useEffect, useState, useRef } from "react";

interface AnimatedNumberProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export function AnimatedNumber({ end, suffix = "", duration = 1500 }: AnimatedNumberProps) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // easeOutCubic (smooth, no flashy bouncing)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, hasAnimated]);

  return (
    <span ref={nodeRef} className="inline-block relative">
      <span className={hasAnimated ? "opacity-100" : "opacity-0"}>{count}{suffix}</span>
      {!hasAnimated && <span className="absolute inset-0">{0}{suffix}</span>}
    </span>
  );
}
