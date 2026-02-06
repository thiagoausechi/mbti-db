import { z } from "zod/mini";

export const ExtraversionEnergy = "e" as const;
export const Extraverted = "extraverted" as const;
export const IntroversionEnergy = "i" as const;
export const Introverted = "introverted" as const;

export const EnergyPreferences = [
  ExtraversionEnergy,
  IntroversionEnergy,
] as const;
export const EnergiesMeaning = [Extraverted, Introverted] as const;
export const energySchema = z.enum(EnergyPreferences);
export const energyMeaningSchema = z.enum(EnergiesMeaning);

export type Energy = z.infer<typeof energySchema>;
export type EnergyMeaning = z.infer<typeof energyMeaningSchema>;

export const energyToMeaningMap = {
  [ExtraversionEnergy]: Extraverted,
  [IntroversionEnergy]: Introverted,
} as const satisfies Record<Energy, EnergyMeaning>;

export const meaningToEnergyMap = {
  [Extraverted]: ExtraversionEnergy,
  [Introverted]: IntroversionEnergy,
} as const satisfies Record<EnergyMeaning, Energy>;
