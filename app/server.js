import Fastify from "fastify";

const PORT = 3000;
const app = Fastify({ logger: true });

app.get("/healthcheck", (request, reply) => {
  return { message: "server is up and running" };
});
try {
  await app.listen({ port: PORT });
} catch (error) {
  app.log.error(error);
  process.exit(1);
}
