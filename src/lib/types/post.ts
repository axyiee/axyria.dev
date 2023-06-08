import { z } from "zod";

export const Post = z.object({
  title: z.string(),
  slug: z.string(),
  date: z.string(),
  description: z.string(),
  tags: z.array(z.enum(["first-post"])),
  image: z.string().optional(),
  readingTime: z.number().optional(),
});

type Post = z.infer<typeof Post>;

export default Post;
