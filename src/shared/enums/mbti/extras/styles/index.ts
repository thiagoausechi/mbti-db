import { z } from "zod/mini";
import type { PersonalityPreferences } from "../../preferences";
import {
  communicationStylesSchema,
  parsePersonalityCommunicationStyle,
} from "./communication";
import {
  parsePersonalityReasoningStyle,
  reasoningStylesSchema,
} from "./reasoning";

export const styleTypes = ["communication", "reasoning"] as const;

export const styleTypesSchema = z.enum(styleTypes);
export type StyleType = z.infer<typeof styleTypesSchema>;

export const stylesSchema = z.object({
  communication: communicationStylesSchema,
  reasoning: reasoningStylesSchema,
});
export type Styles = z.infer<typeof stylesSchema>;

export function parsePersonalityStyles({
  energy,
  mind,
  nature,
  tactic,
}: PersonalityPreferences): Styles {
  return {
    communication: parsePersonalityCommunicationStyle(energy, tactic),
    reasoning: parsePersonalityReasoningStyle(mind, nature),
  };
}

export * from "./communication";
export * from "./reasoning";
