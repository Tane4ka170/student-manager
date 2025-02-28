import { z } from "zod";

const addStudentSchema = z.object({
  firstName: z.string().min(1, { message: "First Name cannot be empty!" }),
  lastName: z.string().min(1, { message: "Last Name cannot be empty!" }),
  email: z
    .string()
    .min(1, { message: "Email Address cannot be left blank!" })
    .email(),
  reference: z
    .string()
    .min(9, { message: "Student Reference must contain exactly 9 characters!" })
    .regex(/^D[0-9]{8}$/, {
      message: "Student Reference format should be like: D12345678",
    }),
});

type TAddStudentFormInputs = z.infer<typeof addStudentSchema>;

export { addStudentSchema, type TAddStudentFormInputs };
