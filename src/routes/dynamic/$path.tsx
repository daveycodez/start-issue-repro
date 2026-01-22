import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/dynamic/$path")({
	component: RouteComponent,
});

function RouteComponent() {
	const { path } = Route.useParams();
	const navigate = useNavigate();

	const navigateTo = path === "test" ? "/dynamic/test2" : "/dynamic/test";

	return (
		<div>
			Path: `{path}`!
			<button
				type="button"
				onClick={() => {
					navigate({ to: navigateTo });
				}}
			>
				hi
			</button>
		</div>
	);
}
