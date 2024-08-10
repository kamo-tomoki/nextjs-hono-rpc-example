import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

const app = new Hono().basePath("/api");

const form = z.object({ user: z.string() });

const routes = app
	.get("/a", (c) => {
		return c.json({ message: "Hello from Hono!" });
	})
	.post("/b", zValidator("form", form), (c) => {
		const data = c.req.valid("form");
		return c.json({ message: `Hello ${data.user}!` });
	});

export type AppType = typeof routes;
export default app;
