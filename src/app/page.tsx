"use client";

import { useEffect, useState } from "react";
import client from "../hono/client";
import styles from "./page.module.css";

export default function Home() {
	const [message1, setMessage1] = useState("");
	const [message2, setMessage2] = useState("");

	useEffect(() => {
		const getData = async () => {
			const res = await client.api.a.$get();
			const data = await res.json();
			data.message && setMessage1(data.message);
		};

		const postData = async () => {
			const res = await client.api.b.$post({ form: { user: "John" } });
			const data = await res.json();
			data.message && setMessage2(data.message);
		};

		getData();
		postData();
	}, []);

	return (
		<main className={styles.main}>
			<h1>Next.js + Hono + Zod + Biome!</h1>
			<p>{message1}</p>
			<p>{message2}</p>
		</main>
	);
}
