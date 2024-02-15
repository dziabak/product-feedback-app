// REACT
import { useState } from "react";
// LIBRARIES
import clsx from "clsx";
// TYPES
import { ProductRequestsData } from "../../types/types";
// COMPONENTS
import RoadmapGridStatus from "./RoadmapGridStatus";

const RoadmapGridMobileView = ({ data }: { data: ProductRequestsData }) => {
	let content!: JSX.Element | JSX.Element[];

	const [status, setStatus] = useState("planned");

	const getStatusLength = (data: ProductRequestsData, status: string) => {
		const filteredData = data.filter((feedback) => {
			return feedback.status.includes(status);
		});
		return filteredData.length;
	};

	const plannedLength = getStatusLength(data, "planned");
	const inProgressLength = getStatusLength(data, "in-progress");
	const liveLength = getStatusLength(data, "live");

	if (status === "planned") {
		content = <RoadmapGridStatus data={data} status="planned" />;
	} else if (status === "in-progress") {
		content = <RoadmapGridStatus data={data} status="in-progress" />;
	} else {
		content = <RoadmapGridStatus data={data} status="live" />;
	}

	return (
		<>
			<div className="flex justify-evenly px-4 border-b-2">
				<button
					className={clsx(
						"py-4 px-12 font-bold text-black/25 transition-all duration-[50ms] hover:text-black/50 hover:border-b-4",
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
						"py-4 px-12 font-bold text-black/25 transition-all duration-[50ms] hover:text-black/50 hover:border-b-4",
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
						"py-4 px-12 font-bold text-black/25 transition-all duration-[50ms] hover:text-black/50 hover:border-b-4",
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

export default RoadmapGridMobileView;
