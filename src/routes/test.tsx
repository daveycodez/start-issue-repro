import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/test")({
	component: RouteComponent,
});

// Expensive computation that blocks during hydration
function expensiveCalculation(iterations: number): number {
	let result = 0;
	for (let i = 0; i < iterations; i++) {
		result += Math.sqrt(i) * Math.sin(i) * Math.cos(i);
	}
	return result;
}

function SlowItem() {
	// Each item does expensive work during render
	const value = expensiveCalculation(50000);

	return <div>{value}</div>;
}

function RouteComponent() {
	const { data, isPending } = useQuery({
		queryKey: ["test"],
		queryFn: async () => {
			const res = await fetch("/api/test");
			return res.text();
		},
	});

	// Create many slow items to simulate heavy hydration
	const items = Array.from({ length: 50 }, (_, i) => i);

	return (
		<div>
			<p>{isPending ? "Loading..." : data}</p>
			<div>
				{items.map((i) => (
					<SlowItem key={i} />
				))}
			</div>
		</div>
	);
}
