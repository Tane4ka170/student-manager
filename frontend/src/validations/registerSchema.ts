import { z } from "zod";

const registerSchema = z
  .object({
    firstName: z
      .string()
      .min(1, { message: "First Name cannot be left blank!" }),
    lastName: z.string().min(1, { message: "Last Name cannot be empty!" }),
    email: z
      .string()
      .min(1, { message: "Email Address cannot be left blank!" })
      .email(),
    password: z
      .string()
      .min(1, { message: "Password cannot be empty!" })
      .regex(/"^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$"/, {
        message: "Insecure Password",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirmation of Password is required!" }),
  })
  .refine((input) => input.password === input.confirmPassword, {
    message: "Password and Confirmation Password do not match!",
    path: ["confirmPassword"],
  });

type TRegisterFormInputs = z.infer<typeof registerSchema>;

export { registerSchema, type TRegisterFormInputs };
