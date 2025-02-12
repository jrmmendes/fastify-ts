import path from "node:path";

import Fastify from "fastify";

import { environment } from "./environment.ts";
import { loggerConfig } from "./logger.config.ts";

export const bootstrap = () => {
  const env = environment();

  const app = Fastify({
    logger: {
      name: "http",
      ...loggerConfig,
    },
  });
  
  app.register(import("@fastify/view"), {
    engine: {
      ejs: import("ejs"),
    },
    root: path.join(path.dirname(import.meta.dirname), 'views')
  });

  app.register(import("@fastify/autoload"), {
    dir: path.join(path.dirname(import.meta.dirname), "application"),
    matchFilter: (path) => path.endsWith(".router.ts"),
  });
  
  return app;
};
