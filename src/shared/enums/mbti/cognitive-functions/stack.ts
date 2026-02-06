import { z } from "zod/mini";
import {
  oppositeCognitiveFunctionMeaning,
  type CognitiveFunction,
  type OrientedCognitiveFunction,
} from ".";
import type {
  IncompletePersonalityPreferences,
  PersonalityPreferences,
} from "../preferences";
import { oppositeEnergyMap } from "../preferences/energy";
import { mindToMeaningMap } from "../preferences/mind";
import { natureToMeaningMap } from "../preferences/nature";
import { JudgingTactic } from "../preferences/tactics";

export const stackTypes = [
  "dominant",
  "auxiliary",
  "tertiary",
  "inferior",
] as const;

export const stackTypesSchema = z.enum(stackTypes);
export type StackType = z.infer<typeof stackTypesSchema>;

export type CognitiveStack = Record<StackType, OrientedCognitiveFunction>;

export function parsePersonalityCognitiveStack(
  preferences: PersonalityPreferences,
): CognitiveStack {
  const { energy, mind, nature, tactic } = preferences;
  let dominantFn: CognitiveFunction;
  let auxiliaryFn: CognitiveFunction;

  if (tactic === JudgingTactic) {
    dominantFn = mindToMeaningMap[mind];
    auxiliaryFn = natureToMeaningMap[nature];
  } else {
    dominantFn = natureToMeaningMap[nature];
    auxiliaryFn = mindToMeaningMap[mind];
  }

  return {
    dominant: {
      function: dominantFn,
      attitude: energy,
    },
    auxiliary: {
      function: auxiliaryFn,
      attitude: oppositeEnergyMap[energy],
    },
    tertiary: {
      function: oppositeCognitiveFunctionMeaning[auxiliaryFn],
      attitude: energy,
    },
    inferior: {
      function: oppositeCognitiveFunctionMeaning[dominantFn],
      attitude: oppositeEnergyMap[energy],
    },
  };
}

export function tryParsePersonalityCognitiveStack(
  preferences: IncompletePersonalityPreferences,
) {
  const { energy, mind, nature, tactic } = preferences;
  if (!energy) return;

  let dominantFn: CognitiveFunction | undefined;
  let auxiliaryFn: CognitiveFunction | undefined;
  let tertiaryFn: CognitiveFunction | undefined;
  let inferiorFn: CognitiveFunction | undefined;

  if (tactic) {
    if (tactic === JudgingTactic) {
      dominantFn = mind ? mindToMeaningMap[mind] : undefined;
      auxiliaryFn = nature ? natureToMeaningMap[nature] : undefined;
    } else {
      dominantFn = nature ? natureToMeaningMap[nature] : undefined;
      auxiliaryFn = mind ? mindToMeaningMap[mind] : undefined;
    }
  }

  if (dominantFn) inferiorFn = oppositeCognitiveFunctionMeaning[dominantFn];
  if (auxiliaryFn) tertiaryFn = oppositeCognitiveFunctionMeaning[auxiliaryFn];

  return {
    dominant: {
      function: dominantFn,
      attitude: energy,
    },
    auxiliary: {
      function: auxiliaryFn,
      attitude: oppositeEnergyMap[energy],
    },
    tertiary: {
      function: tertiaryFn,
      attitude: energy,
    },
    inferior: {
      function: inferiorFn,
      attitude: oppositeEnergyMap[energy],
    },
  };
}
