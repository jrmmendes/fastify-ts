import { z } from "zod";
import { baseLogger } from "./logger.config.ts";

const envs = ["LOCAL", "DEV", "PROD", "TEST"] as const;

const environmentSchema = z.object({
  NODE_ENV: z.enum(envs),
  PORT: z
    .string()
    .transform((port) => Number(port))
    .default("3000"),
});

type Environment = z.infer<typeof environmentSchema>;

export const environment = () => {
  const envLogger = baseLogger.child({ name: "environment" });
  const parsedProcessEnv = environmentSchema.safeParse(process.env);

  if (parsedProcessEnv.error) {
    envLogger.error(parsedProcessEnv.error.flatten().fieldErrors);
    process.exit(0);
  }

  return parsedProcessEnv.data;
};
