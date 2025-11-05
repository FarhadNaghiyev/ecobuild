import z from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(2, "Ad minimum 2 simvol olmalıdır"),
  lastName: z.string().min(2, "Soyad minimum 2 simvol olmalıdır"),
  phone: z.string().regex(/^\+?\d{7,14}$/, "Düzgün nömrə daxil edin"),
  email: z.string().email("Düzgün email daxil edin"),
  subject: z.string().min(3, "Mövzu minimum 3 simvol olmalıdır"),
  message: z.string().min(10, "Mesaj minimum 10 simvol olmalıdır"),
});