import { bootstrap } from "./core/bootstrap.ts";
import { environment } from "./core/environment.ts";
import { baseLogger } from "./core/logger.config.ts";

const serverLogger = baseLogger.child({ name: "server" });

try {
  const env = environment();
  const app = bootstrap();
  
  await app.listen({
    port: env.PORT,
  });
} catch (error) {
  serverLogger.error(error);
}
