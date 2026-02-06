import { z } from "zod/mini";
import {
  Intuition,
  IntuitiveMind,
  Sensing,
  SensingMind,
} from "../preferences/mind";
import type { JudgingTactic } from "../preferences/tactics";

export const JudgingFunctions = [IntuitiveMind, SensingMind] as const;
export const JudgingFunctionsMeaning = [Intuition, Sensing] as const;
export const judgingFunctionSchema = z.enum(JudgingFunctions);
export const judgingFunctionMeaningSchema = z.enum(JudgingFunctionsMeaning);

export type JudgingFunction = z.infer<typeof judgingFunctionSchema>;
export type JudgingFunctionMeaning = z.infer<
  typeof judgingFunctionMeaningSchema
>;
export type Judging = typeof JudgingTactic;
