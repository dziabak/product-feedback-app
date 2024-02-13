// EXTERNAL IMPORTS
import { useQuery } from "@tanstack/react-query";
// INTERNAL IMPORTS
import { fetchWithoutSuggestionsData } from "../../lib/http";
import RoadmapGridStatus from "./RoadmapGridStatus";
import LoadingSpinner from "../ui/LoadingSpinner";
import ErrorBlock from "../ui/ErrorBlock";
import { useState } from "react";
import clsx from "clsx";
import { ProductRequestsData } from "../../types/types";

const RoadmapGrid = () => {
	let content!: JSX.Element | JSX.Element[];
	let mobileView!: JSX.Element | JSX.Element[];
	let mobileContent!: JSX.Element | JSX.Element[];

	const getStatusLength = (data: ProductRequestsData, status: string) => {
		const filteredData = data.filter((feedback) => {
			return feedback.status.includes(status);
		});
		return filteredData.length;
	};

	const { data, isFetching, isError } = useQuery({
		queryKey: ["feedback", "roadmap"],
		queryFn: fetchWithoutSuggestionsData,
	});

	if (isFetching) {
		content = <LoadingSpinner />;
	}

	if (isError) {
		content = (
			<ErrorBlock
				errorHeader="There was an error"
				errorMessage="Please try again later"
			/>
		);
	}

	const [status, setStatus] = useState("planned");
	if (data) {
		const plannedCount = getStatusLength(data, "planned");
		const inProgressCount = getStatusLength(data, "in-progress");
		const liveCount = getStatusLength(data, "live");

		if (status === "planned") {
			mobileContent = <RoadmapGridStatus data={data} status="planned" />;
		} else if (status === "in-progress") {
			mobileContent = <RoadmapGridStatus data={data} status="in-progress" />;
		} else {
			mobileContent = <RoadmapGridStatus data={data} status="live" />;
		}

		mobileView = (
			<div className="md:hidden">
				<div className="flex justify-evenly px-4 border-b-2">
					<button
						className={clsx(
							"py-4 px-12 font-bold text-black/25 transition-all duration-[50ms] hover:text-black/50 hover:border-b-4",
							status === "planned" &&
								"text-black/100 border-b-4 border-c-orange"
						)}
						onClick={() => {
							setStatus("planned");
						}}>
						Planned ({plannedCount})
					</button>
					<button
						className={clsx(
							"py-4 px-12 font-bold text-black/25 transition-all duration-[50ms] hover:text-black/50 hover:border-b-4",
							status === "in-progress" &&
								"text-black/100 border-b-4 border-c-magenta"
						)}
						onClick={() => {
							setStatus("in-progress");
						}}>
						In-Progress ({inProgressCount})
					</button>
					<button
						className={clsx(
							"py-4 px-12 font-bold text-black/25 transition-all duration-[50ms] hover:text-black/50 hover:border-b-4",
							status === "live" && "text-black/100 border-b-4 border-c-aqua"
						)}
						onClick={() => {
							setStatus("live");
						}}>
						Live ({liveCount})
					</button>
				</div>
				<div className="px-8">{mobileContent}</div>
			</div>
		);

		content = (
			<>
				<RoadmapGridStatus data={data} status="planned" />
				<RoadmapGridStatus data={data} status="in-progress" />
				<RoadmapGridStatus data={data} status="live" />
			</>
		);
	}

	return (
		<div>
			{mobileView}
			<div className="hidden md:grid grid-cols-3 gap-4">{content}</div>
		</div>
	);
};

export default RoadmapGrid;
