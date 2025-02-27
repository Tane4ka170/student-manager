import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email Address cannot be left blank!" })
    .email(),
  password: z.string().min(1, { message: "Password cannot be empty!" }),
});

type TLoginFormInputs = z.infer<typeof loginSchema>;

export { loginSchema, type TLoginFormInputs };
