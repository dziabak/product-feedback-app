// EXTERNAL IMPORTS
import { QueryClient } from "@tanstack/react-query";
// INTERNAL IMPORTS
import { FeedbackData } from "../types/types";

export const queryClient = new QueryClient();

export const fetchAllFeedbackData = async () => {
	const response = await fetch("../data.json");
	// const response = await fetch(
	// 	"https://data.json",
	// 	{ method: "GET", headers: { "Content-Type": "application.json" } }
	// );

	if (!response.ok) {
		const error = new Error("Data could not be fetched!");
		throw error;
	}

	const allFeedbackData: FeedbackData = await response.json();

	return allFeedbackData.productRequests;
};

export const fetchOnlySuggestionsData = async () => {
	const response = await fetch("../data.json");
	// const response = await fetch(
	// 	"https://data.json",
	// 	{ method: "GET", headers: { "Content-Type": "application.json" } }
	// );

	if (!response.ok) {
		const error = new Error("Data could not be fetched!");
		throw error;
	}

	const allFeedbackData: FeedbackData = await response.json();

	const onlySuggestionsData = allFeedbackData.productRequests.filter(
		(feedback) => {
			return feedback.status.includes("suggestion");
		}
	);

	return onlySuggestionsData;
};

export const fetchWithoutSuggestionsData = async () => {
	const response = await fetch("../data.json");
	// const response = await fetch(
	// 	"https://data.json",
	// 	{ method: "GET", headers: { "Content-Type": "application.json" } }
	// );

	if (!response.ok) {
		const error = new Error("Data could not be fetched!");
		throw error;
	}

	const allFeedbackData: FeedbackData = await response.json();

	const withoutSuggestionsData = allFeedbackData.productRequests.filter(
		(feedback) => {
			return !feedback.status.includes("suggestion");
		}
	);

	return withoutSuggestionsData;
};
