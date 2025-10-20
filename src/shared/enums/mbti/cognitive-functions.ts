import type { LucideProps } from "lucide-react";
import { BrainCircuit, Eye, Heart, Sparkles } from "lucide-react";
import type { ComponentType } from "react";
import { z } from "zod/mini";

export const cognitiveFunctions = [
  "sensing",
  "intuition",
  "thinking",
  "feeling",
] as const;

export const cognitiveFunctionsSchema = z.enum(cognitiveFunctions);
export type CognitiveFunction = z.infer<typeof cognitiveFunctionsSchema>;

export const cognitiveFunctionIconMap: Record<
  CognitiveFunction,
  ComponentType<LucideProps>
> = {
  sensing: Eye,
  intuition: Sparkles,
  thinking: BrainCircuit,
  feeling: Heart,
};
