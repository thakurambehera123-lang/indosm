import { z } from 'zod';

export const signUpSchema = z.object({
  name: z.string().min(2, 'Name must contain at least 2 characters.').max(50),
  email: z.string().email('Please supply a valid corporate/student email address.'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long.')
    .regex(/[A-Z]/, 'Password requires at least one uppercase letter.')
    .regex(/[a-z]/, 'Password requires at least one lowercase letter.')
    .regex(/[0-9]/, 'Password requires at least one numeric digit.')
    .regex(/[^A-Za-z0-9]/, 'Password requires at least one special character symbol.'),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid credentials configuration format.'),
  password: z.string().min(1, 'Password cannot be blank.'),
});

export type SignUpInput = z.infer<typeof signUpSchema>;
export type LoginInput = z.infer<typeof loginSchema>;