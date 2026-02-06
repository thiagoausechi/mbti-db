import { z } from "zod/mini";
import {
  Feeling,
  FeelingNature,
  Thinking,
  ThinkingNature,
} from "../preferences/nature";
import type { PerceivingTactic } from "../preferences/tactics";

export const PerceivingFunctions = [ThinkingNature, FeelingNature] as const;
export const PerceivingFunctionsMeaning = [Thinking, Feeling] as const;
export const perceivingFunctionSchema = z.enum(PerceivingFunctions);
export const perceivingFunctionMeaningSchema = z.enum(
  PerceivingFunctionsMeaning,
);

export type PerceivingFunction = z.infer<typeof perceivingFunctionSchema>;
export type PerceivingFunctionMeaning = z.infer<
  typeof perceivingFunctionMeaningSchema
>;
export type Perceiving = typeof PerceivingTactic;
