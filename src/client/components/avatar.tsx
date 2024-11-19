"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import { twx } from "../utils";

interface AvatarProps
  extends ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  imageSrc?: string;
}

export const Avatar = forwardRef<
  ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, imageSrc, ...props }, ref) => (
  <Wrapper className={className} ref={ref} {...props}>
    <Image src={imageSrc} alt="Avatar" />
    <Fallback>
      <UserIcon />
    </Fallback>
  </Wrapper>
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const Wrapper = twx(
  AvatarPrimitive.Root,
)`relative flex h-fit w-fit shrink-0 overflow-hidden rounded-full bg-background p-2 shadow-relief`;
const Image = twx(
  AvatarPrimitive.Image,
)`ring-1 ring-white aspect-square h-14 w-14 rounded-full object-cover`;
const Fallback = twx(
  AvatarPrimitive.Fallback,
)`bg-muted flex h-full w-full items-center justify-center rounded-full bg-foreground p-3 ring-1 ring-white`;
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none">
    <path
      className="fill-background"
      d="M32 30.677v-.007a1.275 1.275 0 0 0-.072-.388c-1.136-5.694-5.215-10.318-10.574-12.197a9.843 9.843 0 0 0 4.435-8.24c0-5.438-4.383-9.845-9.79-9.845-5.409 0-9.791 4.407-9.791 9.846a9.843 9.843 0 0 0 4.435 8.24A16.321 16.321 0 0 0 .072 30.281 1.273 1.273 0 0 0 0 30.67v.043C0 31.422.571 32 1.28 32c.709 0 1.28-.575 1.28-1.287v-.037h.026c1.297-6.252 6.81-10.949 13.412-10.949 6.604 0 12.116 4.697 13.416 10.95h.026v.036c0 .709.571 1.287 1.28 1.287.705 0 1.28-.575 1.28-1.287v-.037ZM8.71 9.841c0-4.049 3.262-7.33 7.288-7.33 4.027 0 7.29 3.281 7.29 7.33 0 4.05-3.263 7.334-7.29 7.334-4.026 0-7.289-3.284-7.289-7.334Z"
    />
  </svg>
);
