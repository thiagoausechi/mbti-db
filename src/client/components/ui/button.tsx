import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { merge } from "~/client/lib/merge-class-name";

const buttonVariants = cva(
  "cursor-pointer rounded-full truncate inline-flex items-center justify-center gap-2 text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-dark-tone text-light-tone hover:bg-dark-tone/70 shadow-elevation-neumorphic",
        secondary:
          "bg-light-tone text-dark-tone hover:bg-white/60 dark:hover:bg-black/40 shadow-elevation-neumorphic",
        active:
          "cursor-default bg-light-tone text-dark-tone shadow-depth-neumorphic",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "gap-1.5 py-1 px-3.5 has-[>svg]:px-2.5",
        icon: "size-9",
        "icon-sm": "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  full = false,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    full?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={merge(
        buttonVariants({ variant, size, className }),
        full && "w-full",
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
