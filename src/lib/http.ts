// EXTERNAL IMPORTS
import { QueryClient } from "@tanstack/react-query";
// TYPES
import { FeedbackData, ProductRequestsData } from "../types/types";

export const queryClient = new QueryClient();

export const fetchAllFeedbackData = async () => {
	// const response = await fetch("../data.json");
	const response = await fetch(
		"https://product-feedback-app-bc088-default-rtdb.europe-west1.firebasedatabase.app/productRequests.json",
		{ method: "GET", headers: { "Content-Type": "application.json" } }
	);

	if (!response.ok) {
		const error = new Error("Data could not be fetched!");
		throw error;
	}

	const allFeedbackData: FeedbackData = await response.json();

	return allFeedbackData.productRequests;
};

export const fetchOnlySuggestionsData = async () => {
	// const response = await fetch("../data.json");
	const response = await fetch(
		"https://product-feedback-app-bc088-default-rtdb.europe-west1.firebasedatabase.app/productRequests.json",
		{ method: "GET", headers: { "Content-Type": "application.json" } }
	);

	if (!response.ok) {
		const error = new Error("Data could not be fetched!");
		throw error;
	}

	const allFeedbackData: ProductRequestsData = await response.json();

	const onlySuggestionsData = allFeedbackData.filter((feedback) => {
		return feedback.status.includes("suggestion");
	});

	return onlySuggestionsData;
};

export const fetchWithoutSuggestionsData = async () => {
	// const response = await fetch("../data.json");
	const response = await fetch(
		"https://product-feedback-app-bc088-default-rtdb.europe-west1.firebasedatabase.app/productRequests.json",
		{ method: "GET", headers: { "Content-Type": "application.json" } }
	);

	if (!response.ok) {
		const error = new Error("Data could not be fetched!");
		throw error;
	}

	const allFeedbackData: ProductRequestsData = await response.json();

	const withoutSuggestionsData = allFeedbackData.filter((feedback) => {
		return !feedback.status.includes("suggestion");
	});

	return withoutSuggestionsData;
};

export const fetchFeedbackItemData = async ({
	id,
}: {
	id: string | undefined;
}) => {
	// const response = await fetch("../data.json");
	const response = await fetch(
		"https://product-feedback-app-bc088-default-rtdb.europe-west1.firebasedatabase.app/productRequests.json",
		{ method: "GET", headers: { "Content-Type": "application.json" } }
	);

	if (!response.ok) {
		const error = new Error("Data could not be fetched!");
		throw error;
	}

	const allFeedbackData: ProductRequestsData = await response.json();

	const feedbackItemData = allFeedbackData.filter((feedback) => {
		// const niceUrl = makeNiceUrl(item.title);
		return feedback.id.toString() === id;
	});

	return feedbackItemData;
};

export const createNewFeedback = async (feedbackData: any) => {
	// Fetch existing data to determine the next index
	const existingDataResponse = await fetch(
		"https://product-feedback-app-bc088-default-rtdb.europe-west1.firebasedatabase.app/productRequests.json"
	);

	if (!existingDataResponse.ok) {
		const error = new Error("An error occurred while fetching existing data!");
		throw error;
	}

	const existingData = await existingDataResponse.json();
	const lastIndex = Object.keys(existingData).length;

	// Construct URL with the next index as the key
	const url = `https://product-feedback-app-bc088-default-rtdb.europe-west1.firebasedatabase.app/productRequests/${lastIndex}.json`;

	// Send data to the constructed URL
	const response = await fetch(url, {
		method: "PUT",
		body: JSON.stringify(feedbackData),
		headers: { "Content-Type": "application/json" },
	});

	if (!response.ok) {
		const error = new Error("An error occurred while sending the data!");
		throw error;
	}

	const feedback = await response.json();
	return feedback;
};

export const deleteFeedback = async ({ id }: { id: any }) => {
	// Fetch all feedback data
	const existingDataResponse = await fetch(
		"https://product-feedback-app-bc088-default-rtdb.europe-west1.firebasedatabase.app/productRequests.json",
		{ method: "GET", headers: { "Content-Type": "application.json" } }
	);

	if (!existingDataResponse.ok) {
		throw new Error("Data could not be fetched!");
	}

	let allFeedbackData: ProductRequestsData = await existingDataResponse.json();

	// Filter out the item with the provided ID
	const updatedFeedbackData = allFeedbackData.filter(
		(feedback) => feedback.id.toString() !== id
	);

	// Update the data in Firebase
	const updateResponse = await fetch(
		"https://product-feedback-app-bc088-default-rtdb.europe-west1.firebasedatabase.app/productRequests.json",
		{
			method: "PUT",
			body: JSON.stringify(updatedFeedbackData),
			headers: { "Content-Type": "application/json" },
		}
	);

	if (!updateResponse.ok) {
		throw new Error("An error occurred while updating the data!");
	}

	return updateResponse.json();
};
