import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/dynamic/$path")({
	component: RouteComponent,
});

function RouteComponent() {
	const { path } = Route.useParams();
	const navigate = useNavigate();

	const navigateTo: string =
		path === "test" ? "/dynamic/test2" : "/dynamic/test";

	return (
		<div>
			Path: `{path}`!
			<button
				type="button"
				onClick={() => {
					navigate({ to: navigateTo });
				}}
			>
				Navigate to {path === "test" ? "test2" : "test"}
			</button>
			<div className="h-256 bg-red-600">Lorem ipsum</div>
			<div className="h-256 bg-blue-600">bottom</div>
		</div>
	);
}
