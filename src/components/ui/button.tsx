import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "gold-focus inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60",
  {
    variants: {
      variant: {
        gold: "bg-gold text-navy shadow-gold hover:bg-gold-600",
        navy: "bg-navy text-white hover:bg-navy-700",
        outline: "border border-white/35 bg-white/10 text-white backdrop-blur hover:bg-white/20",
        ghost: "text-navy hover:bg-navy/5",
        whatsapp: "bg-[#25D366] text-navy hover:bg-[#1fb85a]",
      },
      size: {
        default: "min-h-11 px-5 py-3",
        sm: "min-h-9 px-3 py-2 text-xs",
        lg: "min-h-12 px-6 py-3.5 text-base",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "default",
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants> & {
    href: string;
    className?: string;
  };

export function ButtonLink({ className, variant, size, ...props }: ButtonLinkProps) {
  return <a className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { buttonVariants };
