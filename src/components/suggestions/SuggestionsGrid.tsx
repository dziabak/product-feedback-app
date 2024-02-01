// EXTERNAL IMPORTS
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
// INTERNAL IMPORTS
import { SingleProductRequestsData } from "../../types/types";
import { fetchOnlySuggestionsData } from "../../lib/http";
import FeedbackTile from "../feeedback-tile/FeedbackTile";
import LoadingSpinner from "../ui/LoadingSpinner";
import ErrorBlock from "../ui/ErrorBlock";
import SuggestionsNoFeedbackData from "./SuggestionsNoFeedbackData";

const SuggestionsGrid = () => {
	let content!: JSX.Element | JSX.Element[];

	const CATEGORY_DATA = ["ui", "ux", "enhancement", "bug", "feature"];
	const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

	const [sortingOption, setSortingOption] = useState("");

	const { data, isFetching, isError } = useQuery({
		queryKey: ["feedback"],
		queryFn: fetchOnlySuggestionsData,
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

	if (data) {
		let sortingFunction: (
			a: SingleProductRequestsData,
			b: SingleProductRequestsData
		) => number;

		switch (sortingOption) {
			case "most-upvotes":
				sortingFunction = (
					a: SingleProductRequestsData,
					b: SingleProductRequestsData
				) => b.upvotes - a.upvotes;
				break;
			case "least-upvotes":
				sortingFunction = (
					a: SingleProductRequestsData,
					b: SingleProductRequestsData
				) => a.upvotes - b.upvotes;
				break;
			case "most-comments":
				sortingFunction = (
					a: SingleProductRequestsData,
					b: SingleProductRequestsData
				) => b.comments?.length - a.comments?.length;
				break;
			case "least-comments":
				sortingFunction = (
					a: SingleProductRequestsData,
					b: SingleProductRequestsData
				) => {
					const aCommentsLength = a.comments ? a.comments.length : undefined;
					const bCommentsLength = b.comments ? b.comments.length : undefined;

					if (aCommentsLength === undefined && bCommentsLength === undefined) {
						return 0;
					} else if (aCommentsLength === undefined) {
						return -1;
					} else if (bCommentsLength === undefined) {
						return 1;
					}

					return aCommentsLength - bCommentsLength;
				};
				break;
			default:
				sortingFunction = (
					_a: SingleProductRequestsData,
					_b: SingleProductRequestsData
				) => 0; // Default to no change in order
		}

		// const filteredData = data.filter((item) => {
		// 	return selectedFilters.some((filter) => item.category.includes(filter));
		// });

		const filteredData = data.filter((item) => {
			// Show all categories if no filters are selected
			if (selectedFilters.length === 0) {
				return true;
			}

			// Return filtered categories
			return selectedFilters.some((filter) => item.category.includes(filter));
		});

		const sortedData = [...filteredData].sort(sortingFunction);

		content = sortedData.map((feedback) => (
			<FeedbackTile
				key={feedback.id}
				id={feedback.id}
				category={feedback.category}
				commentsNumber={feedback.comments?.length}
				description={feedback.description}
				title={feedback.title}
				upvotes={feedback.upvotes}
				status={feedback.status}
			/>
		));

		if (sortedData.length === 0) {
			content = <SuggestionsNoFeedbackData />;
		}
	}

	const handleSortingForm: React.FormEventHandler<HTMLFormElement> = (e) => {
		const selectedSortingOption = (e.target as HTMLSelectElement).value;
		setSortingOption(selectedSortingOption);
	};

	let sort = (
		<form onChange={handleSortingForm} className="flex items-center space-x-2">
			<label htmlFor="category">
				<p className="text-sm font-bold text-c-dark-blue">Sort by:</p>
			</label>
			<select
				name="category"
				id="category"
				className="p-3 rounded-md bg-c-light-gray">
				<option value="most-upvotes">Most Upvotes</option>
				<option value="least-upvotes">Least Upvotes</option>
				<option value="most-comments">Most Comments</option>
				<option value="least-comments">Least Comments</option>
			</select>
		</form>
	);

	const filterHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
		const clickedFilter = (e.target as HTMLButtonElement).innerHTML;

		if (clickedFilter === "all") {
			// Clear all filters
			setSelectedFilters([]);
		} else {
			// Toggle the clicked filter
			setSelectedFilters((prevFilters) => {
				if (prevFilters.includes(clickedFilter)) {
					// Remove the clicked filter
					return prevFilters.filter((filter) => filter !== clickedFilter);
				} else {
					// Add the clicked filter
					return [...prevFilters, clickedFilter];
				}
			});
		}
	};

	let filter = (
		<div className="p-4 bg-white rounded-xl">
			{["all", ...CATEGORY_DATA].map((item) => (
				<button
					onClick={filterHandler}
					key={item}
					className={`px-3 py-2 m-1 text-xs font-semibold transition-colors rounded-xl ${
						(selectedFilters.includes(item) && item !== "all") ||
						(selectedFilters.length === 0 && item === "all")
							? "bg-c-light-blue text-white"
							: "bg-c-gray text-c-light-blue hover:bg-c-light-blue hover:text-white"
					}`}>
					{item}
				</button>
			))}
		</div>
	);

	return (
		<div className="space-y-4">
			{filter}
			{sort}
			{content}
		</div>
	);
};

export default SuggestionsGrid;
