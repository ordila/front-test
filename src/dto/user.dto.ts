import { z } from "zod";

export const updateUserDtoSchema = z.object({
  name: z.string().optional(),
  lastName: z.string().optional(),
  middleName: z.string().optional(),
  dateOfBirth: z.string().datetime().optional().or(z.null()),
  sex: z.string().optional(),
});

export type UpdateUserDto = z.infer<typeof updateUserDtoSchema>;
