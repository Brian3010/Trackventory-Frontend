import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(7, 'Must be at least 10 characters')
    .regex(/\d/, 'Must include a number')
    .regex(/[!@#$%^&]/, 'Must include a symbol (!@#$%^&)'),
});

export type LoginSchema = z.infer<typeof loginSchema>;
