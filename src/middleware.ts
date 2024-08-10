import type { NextRequest } from "next/server";
import app from "./hono/server";

export async function middleware(req: NextRequest) {
	const honoResponse = await app.fetch(req);
	return honoResponse;
}

export const config = {
	matcher: ["/api", "/api/:path*"],
};
