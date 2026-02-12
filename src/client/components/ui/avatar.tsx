"use client";

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { merge } from "~/client/lib/merge-class-name";

const avatarVariants = cva(null, {
  variants: {
    flipped: { false: null },
    size: {
      sm: ["size-8"],
      default: ["size-12"],
      lg: ["w-[90px] h-[86px]"],
    },
  },
  compoundVariants: [
    {
      size: "sm",
      flipped: false,
      class: "rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm",
    },
    {
      size: "sm",
      flipped: true,
      class: "rounded-tl-sm rounded-br-sm rounded-tr-2xl rounded-bl-2xl",
    },

    {
      size: "default",
      flipped: false,
      class: "rounded-tl-[20px] rounded-br-[20px] rounded-tr-md rounded-bl-md",
    },
    {
      size: "default",
      flipped: true,
      class: "rounded-tl-md rounded-br-md rounded-tr-[20px] rounded-bl-[20px]",
    },

    {
      size: "lg",
      flipped: false,
      class: "rounded-tl-[40px] rounded-br-[40px] rounded-tr-xl rounded-bl-xl",
    },
    {
      size: "lg",
      flipped: true,
      class: "rounded-tl-xl rounded-br-xl rounded-tr-[40px] rounded-bl-[40px]",
    },
  ],
  defaultVariants: {
    size: "default",
    flipped: false,
  },
});

type AvatarContextProps = VariantProps<typeof avatarVariants>;

const AvatarContext = React.createContext<AvatarContextProps | null>(null);

function useAvatar() {
  const context = React.useContext(AvatarContext);
  if (!context) throw new Error("useAvatar must be used within an Avatar.");

  return context;
}

function Avatar({
  className,
  size,
  flipped,
  ...props
}: AvatarPrimitive.Root.Props & VariantProps<typeof avatarVariants>) {
  const contextValue = React.useMemo<AvatarContextProps>(
    () => ({ size, flipped }),
    [size, flipped],
  );

  return (
    <AvatarContext.Provider value={contextValue}>
      <AvatarPrimitive.Root
        data-slot="avatar"
        data-size={size}
        data-flipped={flipped}
        className={merge(
          "group/avatar relative flex shrink-0 select-none shadow-elevation-neumorphic bg-dark-tone",
          avatarVariants({ size, flipped, className }),
        )}
        {...props}
      />
    </AvatarContext.Provider>
  );
}

function AvatarImage({ className, ...props }: AvatarPrimitive.Image.Props) {
  const variants = useAvatar();

  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={merge(
        "aspect-square size-full object-cover border-2 border-transparent",
        avatarVariants({ ...variants, className }),
      )}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: AvatarPrimitive.Fallback.Props) {
  const variants = useAvatar();

  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={merge(
        "text-light-tone flex size-full items-center justify-center font-bold text-sm group-data-[size=sm]/avatar:text-xs group-data-[size=large]/avatar:text-xl",
        avatarVariants({ ...variants, className }),
      )}
      {...props}
    />
  );
}

function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={merge(
        "bg-primary text-primary-foreground ring-light-tone absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-blend-color ring-2 select-none",
        "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
        "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
        className,
      )}
      {...props}
    />
  );
}

function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={merge(
        "*:data-[slot=avatar]:ring-light-tone *:data-[slot=avatar]:shadow-none group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2",
        className,
      )}
      {...props}
    />
  );
}

function AvatarGroupCount({
  className,
  size,
  flipped,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof avatarVariants>) {
  return (
    <div
      data-slot="avatar-group-count"
      className={merge(
        "bg-dark-tone text-light-tone font-black text-sm [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3 ring-background relative flex shrink-0 items-center justify-center ring-2",
        avatarVariants({ size, flipped, className }),
      )}
      {...props}
    />
  );
}

export {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
  useAvatar,
};
