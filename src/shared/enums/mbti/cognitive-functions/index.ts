import type { LucideIcon } from "lucide-react";
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
import { z } from "zod/mini";

import type { Energy, EnergyMeaning } from "../preferences/energy";
import {
  Intuition,
  IntuitiveMind,
  Sensing,
  SensingMind,
} from "../preferences/mind";
import {
  Feeling,
  FeelingNature,
  Thinking,
  ThinkingNature,
} from "../preferences/nature";

export const cognitiveFunctions = [
  Sensing,
  Intuition,
  Thinking,
  Feeling,
] as const;

export const cognitiveFunctionsSchema = z.enum(cognitiveFunctions);
export type CognitiveFunction = z.infer<typeof cognitiveFunctionsSchema>;

export type OrientedCognitiveFunction = {
  function: CognitiveFunction;
  attitude: Energy;
};

type IconInfo = Record<"default" | EnergyMeaning, LucideIcon>;
export const cognitiveFunctionIconMap: Record<CognitiveFunction, IconInfo> = {
  [Sensing]: {
    default: Eye,
    extraverted: Bike,
    introverted: Archive,
  },
  [Intuition]: {
    default: Sparkles,
    extraverted: Network,
    introverted: Telescope,
  },
  [Thinking]: {
    default: BrainCircuit,
    extraverted: SquareChartGantt,
    introverted: Puzzle,
  },
  [Feeling]: {
    default: Heart,
    extraverted: Users,
    introverted: Gem,
  },
} as const;

export const oppositeCognitiveFunctionMeaning = {
  [Sensing]: Intuition,
  [Intuition]: Sensing,
  [Thinking]: Feeling,
  [Feeling]: Thinking,
} as const;

export const cognitiveFunctionToAcronymMap = {
  [Sensing]: SensingMind,
  [Intuition]: IntuitiveMind,
  [Thinking]: ThinkingNature,
  [Feeling]: FeelingNature,
};

export * from "./judging";
export * from "./perceiving";
