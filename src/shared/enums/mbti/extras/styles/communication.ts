import { z } from "zod/mini";
import {
  ExtraversionEnergy,
  IntroversionEnergy,
  type Energy,
} from "../../preferences/energy";
import {
  JudgingTactic,
  PerceivingTactic,
  type Tactic,
} from "../../preferences/tactics";

export const ConclusiveCommunicationStyle = "conclusive" as const;
export const OpinionatedCommunicationStyle = "opinionated" as const;
export const DecisivonCommunicationStyle = "decisive" as const;
export const OpenMindedCommunicationStyle = "open-minded" as const;

export const communicationStyles = [
  ConclusiveCommunicationStyle,
  OpinionatedCommunicationStyle,
  DecisivonCommunicationStyle,
  OpenMindedCommunicationStyle,
] as const;

export const communicationStylesSchema = z.enum(communicationStyles);
export type CommunicationStyle = z.infer<typeof communicationStylesSchema>;

export const communicationStyleMap = {
  [ExtraversionEnergy]: {
    [JudgingTactic]: DecisivonCommunicationStyle,
    [PerceivingTactic]: OpenMindedCommunicationStyle,
  },
  [IntroversionEnergy]: {
    [JudgingTactic]: ConclusiveCommunicationStyle,
    [PerceivingTactic]: OpinionatedCommunicationStyle,
  },
} as const;

export const communicationStyleAcronymMap = {
  [ConclusiveCommunicationStyle]: "IxxJ",
  [OpinionatedCommunicationStyle]: "IxxP",
  [DecisivonCommunicationStyle]: "ExxJ",
  [OpenMindedCommunicationStyle]: "ExxP",
} as const;

export function parsePersonalityCommunicationStyle(
  energy: Energy,
  tactic: Tactic,
): CommunicationStyle {
  return communicationStyleMap[energy][tactic];
}
