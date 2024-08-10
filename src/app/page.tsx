"use client";

import { useQuery } from "@tanstack/react-query";
import client from "../hono/client";
import styles from "./page.module.css";

export default function Home() {
	const getData = async () => {
		const res = await client.api.a.$get();
		return await res.json();
	};

	const postData = async () => {
		const res = await client.api.b.$post({ form: { user: "John" } });
		return await res.json();
	};

	const getQuery = useQuery({ queryKey: ["getQuery"], queryFn: getData });
	const postQuery = useQuery({ queryKey: ["postQuery"], queryFn: postData });

	return (
		<main className={styles.main}>
			<h1>Next.js + Hono + Zod + Biome!</h1>
			{(getQuery.isLoading || postQuery.isLoading) && <p>Loading...</p>}
			<p>{getQuery.data?.message}</p>
			<p>{postQuery.data?.message}</p>
		</main>
	);
}
