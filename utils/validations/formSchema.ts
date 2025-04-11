import { z } from 'zod';

export const contactSchema = z.object({
      name: z.string().min(3, "Name is required"),
      email: z.string().email("Invalid email address"),
      message:z.string().min(5,"Message must be at least 5 characters")
})

export type ContactFormData = z.infer<typeof contactSchema>
