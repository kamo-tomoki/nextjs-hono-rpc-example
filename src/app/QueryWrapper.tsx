"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

export default function QueryWrapper({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				// Disable automatic refetching on window focus
				refetchOnWindowFocus: false,
			},
		},
	});

	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
}
