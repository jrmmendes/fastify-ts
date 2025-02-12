import { Post } from "./post.entity.ts";

export const getPost = () => {
  return new Post("Sample post", "This is a blogpost");
};
