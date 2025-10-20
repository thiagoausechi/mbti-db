import type { LucideProps } from "lucide-react";
import { Lock, LockOpen, ShieldHalf } from "lucide-react";
import type { ComponentType } from "react";
import { z } from "zod/mini";

export const visibility = ["show", "hide", "protected"] as const;

export const visibilitySchema = z.enum(visibility);
export type Visibility = z.infer<typeof visibilitySchema>;

export const visibilityIconMap: Record<
  Visibility,
  ComponentType<LucideProps>
> = {
  show: LockOpen,
  hide: Lock,
  protected: ShieldHalf,
} as const;
