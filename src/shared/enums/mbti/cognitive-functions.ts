import type { LucideProps } from "lucide-react";
import {
  Archive,
  Bike,
  BrainCircuit,
  Eye,
  Gem,
  Heart,
  Network,
  Puzzle,
  Sparkles,
  SquareChartGantt,
  Telescope,
  Users,
} from "lucide-react";
import type { ComponentType } from "react";
import { z } from "zod/mini";

export const cognitiveFunctions = [
  "sensing",
  "intuition",
  "thinking",
  "feeling",
] as const;
export const attitudes = ["extraverted", "introverted"] as const;

export const cognitiveFunctionsSchema = z.enum(cognitiveFunctions);
export const attitudesSchema = z.enum(attitudes);

export type CognitiveFunction = z.infer<typeof cognitiveFunctionsSchema>;
export type Attitude = z.infer<typeof attitudesSchema>;

type IconInfo = Record<"default" | Attitude, ComponentType<LucideProps>>;

export const cognitiveFunctionIconMap: Record<CognitiveFunction, IconInfo> = {
  sensing: {
    default: Eye,
    extraverted: Bike,
    introverted: Archive,
  },
  intuition: {
    default: Sparkles,
    extraverted: Network,
    introverted: Telescope,
  },
  thinking: {
    default: BrainCircuit,
    extraverted: SquareChartGantt,
    introverted: Puzzle,
  },
  feeling: {
    default: Heart,
    extraverted: Users,
    introverted: Gem,
  },
};
