import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98] select-none",
  {
    variants: {
      variant: {
        default:
          "bg-navy text-white shadow-[0_6px_16px_-4px_rgba(30,45,90,0.3)] hover:bg-navy/95 hover:shadow-[0_8px_20px_-6px_rgba(30,45,90,0.4)] hover:-translate-y-0.5",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm hover:shadow",
        outline:
          "border-2 border-navy bg-transparent text-navy hover:bg-navy hover:text-white shadow-sm hover:shadow-md hover:-translate-y-0.5",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm hover:shadow",
        ghost:
          "hover:bg-accent/10 hover:text-accent",
        link:
          "text-primary underline-offset-4 hover:underline",
        premium:
          "bg-gold text-navy font-bold tracking-wide shadow-md hover:shadow-lg hover:bg-gold/90 hover:-translate-y-0.5 transition-all duration-300",
        navyOutline:
          "border-2 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 hover:border-primary-foreground/50 hover:-translate-y-0.5",
        outlinePremium:
          "border border-border text-foreground bg-transparent hover:bg-muted font-medium hover:-translate-y-0.5 shadow-sm transition-all duration-300",
      },
      size: {
        default: "h-11 px-5 sm:px-7 py-2 content-center",
        sm: "h-9 px-4 sm:px-5 text-xs",
        lg: "h-12 px-6 sm:px-8 text-base",
        xl: "h-14 px-6 sm:px-10 text-base font-semibold tracking-wide",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
