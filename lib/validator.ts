import { title } from "process";
import { z } from "zod";

export const eventFormSchema = z.object({
  title: z.string().min(3, "Title must be atleast 3 characters"),
  description: z
    .string()
    .min(10, "Description must be atleast 10 characters")
    .max(1000, "Description must be atmost 1000 characters"),
  location: z
    .string()
    .min(3, "Location must be atleast 3 characters")
    .max(200, "Location must be atmost 200 characters"),
  imageUrl: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url(),
});
