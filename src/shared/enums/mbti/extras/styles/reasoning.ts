import { z } from "zod/mini";
import { IntuitiveMind, SensingMind, type Mind } from "../../preferences/mind";
import {
  FeelingNature,
  ThinkingNature,
  type Nature,
} from "../../preferences/nature";

export const AnalyticalReasoningStyle = "analytical" as const;
export const ExperientialReasoningStyle = "experiential" as const;
export const PracticalReasoningStyle = "practical" as const;
export const RelationalReasoningStyle = "relational" as const;

export const reasoningStyles = [
  AnalyticalReasoningStyle,
  ExperientialReasoningStyle,
  PracticalReasoningStyle,
  RelationalReasoningStyle,
] as const;

export const reasoningStylesSchema = z.enum(reasoningStyles);
export type ReasoningStyle = z.infer<typeof reasoningStylesSchema>;

export const reasoningStyleMap = {
  [IntuitiveMind]: {
    [ThinkingNature]: AnalyticalReasoningStyle,
    [FeelingNature]: ExperientialReasoningStyle,
  },
  [SensingMind]: {
    [ThinkingNature]: PracticalReasoningStyle,
    [FeelingNature]: RelationalReasoningStyle,
  },
} as const;

export const reasoningStyleAcronymMap = {
  [AnalyticalReasoningStyle]: "xNTx",
  [ExperientialReasoningStyle]: "xNFx",
  [PracticalReasoningStyle]: "xSTx",
  [RelationalReasoningStyle]: "xSFx",
} as const;

export function parsePersonalityReasoningStyle(
  mind: Mind,
  nature: Nature,
): ReasoningStyle {
  return reasoningStyleMap[mind][nature];
}
