import type { FastifyPluginCallback } from "fastify";
import { getPost } from "../domain/posts/get-post.handler.ts";

export const homeRouter: FastifyPluginCallback = (app, opts, done) => {
  app.get("/", async (request, reply) => {
    return reply.view("home");
  });

  done();
};

export default homeRouter;
