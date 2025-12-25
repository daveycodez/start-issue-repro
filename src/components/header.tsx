import { useQuery } from "@tanstack/react-query";

export function Header() {
	const { data, isPending } = useQuery({
		queryKey: ["test"],
		queryFn: async () => {
			const res = await fetch("/api/test");
			return res.text();
		},
	});

	return (
		<header>
			<h1>Header</h1>
			<p>{isPending ? "Loading..." : data}</p>
			<hr />
		</header>
	);
}
