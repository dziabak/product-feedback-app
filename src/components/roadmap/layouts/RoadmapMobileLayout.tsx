// REACT
import { useState } from "react";
// LIBRARIES
import clsx from "clsx";
// TYPES
import { ProductRequestsData } from "../../../types/types";
// HELPERS
import { getStatusLength } from "../../../utils/helpers";
// COMPONENTS
import RoadmapGrid from "../content/RoadmapGrid";

const RoadmapMobileLayout = ({ data }: { data: ProductRequestsData }) => {
	let content!: JSX.Element | JSX.Element[];

	const [status, setStatus] = useState("planned");

	const plannedLength = getStatusLength(data, "planned");
	const inProgressLength = getStatusLength(data, "in-progress");
	const liveLength = getStatusLength(data, "live");

	if (status === "planned") {
		content = <RoadmapGrid data={data} status="planned" />;
	} else if (status === "in-progress") {
		content = <RoadmapGrid data={data} status="in-progress" />;
	} else {
		content = <RoadmapGrid data={data} status="live" />;
	}

	return (
		<>
			<div className="flex justify-between border-b-2">
				<button
					className={clsx(
						"w-1/3 py-4 px-0 text-sm font-bold text-black/25 transition-all duration-[50ms] hover:text-black/50 hover:border-b-4",
						status === "planned" &&
							"text-c-dark-blue border-b-4 border-c-orange"
					)}
					onClick={() => {
						setStatus("planned");
					}}>
					Planned ({plannedLength})
				</button>
				<button
					className={clsx(
						"w-1/3 py-4 px-0 text-sm font-bold text-black/25 transition-all duration-[50ms] hover:text-black/50 hover:border-b-4",
						status === "in-progress" &&
							"text-c-dark-blue border-b-4 border-c-magenta"
					)}
					onClick={() => {
						setStatus("in-progress");
					}}>
					In-Progress ({inProgressLength})
				</button>
				<button
					className={clsx(
						"w-1/3 py-4 px-0 text-sm font-bold text-black/25 transition-all duration-[50ms] hover:text-black/50 hover:border-b-4",
						status === "live" && "text-c-dark-blue border-b-4 border-c-aqua"
					)}
					onClick={() => {
						setStatus("live");
					}}>
					Live ({liveLength})
				</button>
			</div>
			<div className="px-8">{content}</div>
		</>
	);
};

export default RoadmapMobileLayout;
