import { type ClassValue, clsx } from "clsx";
import { createTwc } from "react-twc";
import { twMerge } from "tailwind-merge";

/* eslint-disable @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export const twx = createTwc({ compose: cn });
