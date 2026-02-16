import { z } from "zod/mini";
import { getFunctionCode } from ".";
import type { CognitiveStack } from "./stack";

export const CoreAxisRole = "core" as const;
export const SupportAxisRole = "support" as const;

export const axisRoles = [CoreAxisRole, SupportAxisRole] as const;
export const axisRolesSchema = z.enum(axisRoles);
export type AxisRole = z.infer<typeof axisRolesSchema>;

export const PragmaticMacroAxis = "pragmatic" as const;
export const HarmonicMacroAxis = "harmonic" as const;
export const RealizingMacroAxis = "realizing" as const;
export const InquiringMacroAxis = "inquiring" as const;

export const axisMacroNames = [
  PragmaticMacroAxis,
  HarmonicMacroAxis,
  RealizingMacroAxis,
  InquiringMacroAxis,
] as const;
export const axisMacroSchema = z.enum(axisMacroNames);
export type AxisMacro = z.infer<typeof axisMacroSchema>;

// Judging
export const TeFi = "TeFi" as const;
export const FiTe = "FiTe" as const;
export const FeTi = "FeTi" as const;
export const TiFe = "TiFe" as const;
// Perceiving
export const SeNi = "SeNi" as const;
export const NiSe = "NiSe" as const;
export const NeSi = "NeSi" as const;
export const SiNe = "SiNe" as const;

export const axisPairs = [
  TeFi,
  FiTe,
  FeTi,
  TiFe,
  SeNi,
  NiSe,
  NeSi,
  SiNe,
] as const;
export const axisPairSchema = z.enum(axisPairs);
export type AxisPair = z.infer<typeof axisPairSchema>;

export const axisPairToMacroMap = {
  [TeFi]: PragmaticMacroAxis,
  [FiTe]: PragmaticMacroAxis,
  [FeTi]: HarmonicMacroAxis,
  [TiFe]: HarmonicMacroAxis,
  [SeNi]: RealizingMacroAxis,
  [NiSe]: RealizingMacroAxis,
  [NeSi]: InquiringMacroAxis,
  [SiNe]: InquiringMacroAxis,
} as const satisfies Record<AxisPair, AxisMacro>;

export type AxisInfo = {
  macro: AxisMacro;
  pair: AxisPair;
};

export function getPersonalityAxes(stack: CognitiveStack): PersonalityAxes {
  const { dominant, auxiliary, tertiary, inferior } = stack;

  const domCode = getFunctionCode(dominant);
  const infCode = getFunctionCode(inferior);
  const corePair = `${domCode}${infCode}` as AxisPair;

  const auxCode = getFunctionCode(auxiliary);
  const terCode = getFunctionCode(tertiary);
  const supportPair = `${auxCode}${terCode}` as AxisPair;

  return {
    [CoreAxisRole]: {
      pair: corePair,
      macro: axisPairToMacroMap[corePair],
    },
    [SupportAxisRole]: {
      pair: supportPair,
      macro: axisPairToMacroMap[supportPair],
    },
  };
}

export type PersonalityAxes = Record<AxisRole, AxisInfo>;
