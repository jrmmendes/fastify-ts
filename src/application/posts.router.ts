import type { FastifyPluginCallback } from "fastify";
import { getPost } from "../domain/posts/get-post.handler.ts";

export const postRouter: FastifyPluginCallback = (app, opts, done) => {
  app.get("/posts", async (request, reply) => {
    const post = getPost();
    return reply.view("post", post);
  });

  done();
};

export default postRouter;
