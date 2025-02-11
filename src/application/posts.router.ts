import type { FastifyPluginCallback } from "fastify";
import { listPosts } from "../domain/posts/list-posts.ts";

export const postRouter: FastifyPluginCallback = (app, opts, done) => {
  app.get("/posts", async (request, reply) => {
    return listPosts();
  });

  done();
};

export default postRouter;