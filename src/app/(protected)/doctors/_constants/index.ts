import { doctorSpecialtyEnum } from "@/db/schema";

export type MedicalSpecialty = (typeof doctorSpecialtyEnum.enumValues)[number];

export const medicalSpecialties = doctorSpecialtyEnum.enumValues.map(
  (value) => ({
    value,
    label: value,
  }),
);
