import type { PinoLoggerOptions } from "fastify/types/logger";
import pino from "pino";

export const loggerConfig: PinoLoggerOptions = {
  enabled: process.env.NODE_ENV !== "TEST",
};

export const baseLogger = pino(loggerConfig)