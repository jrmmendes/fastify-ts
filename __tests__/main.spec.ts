import test, { before, describe } from "node:test";
import { bootstrap } from "../src/core/bootstrap.ts";
import request from "supertest";
import { Server } from "node:net";

process.env["NODE_ENV"] = "TEST";

describe("/ endpoint", () => {
  let server: Server;

  before(async () => {
    const app = bootstrap();
    await app.ready();
    server = app.server;
  });

  test("When request to /, expect 200 OK and message payload", async (t) => {
    const response = await request(server).get("/posts?id=123");

    t.assert.equal(response.statusCode, 200);
  });
});
