// LIBRARIES
import { QueryClient } from "@tanstack/react-query";
// TYPES
import {
	FeedbackData,
	ProductRequestsData,
	SingleProductRequestsData,
	CurrentUserData,
	NewFeedbackData,
	TFeedbackFormSchema,
	Comment,
	Reply,
} from "../types/types";

export const queryClient = new QueryClient();

export const fetchCurrentUserData = async () => {
	// const response = await fetch("../data.json");
	const response = await fetch(
		"https://product-feedback-app-bc088-default-rtdb.europe-west1.firebasedatabase.app/currentUser.json",
		{ method: "GET", headers: { "Content-Type": "application.json" } }
	);

	if (!response.ok) {
		const error = new Error("Data could not be fetched!");
		throw error;
	}

	const currentUserData: CurrentUserData = await response.json();

	return currentUserData;
};

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
		return feedback.id === id;
	});

	return feedbackItemData;
};

export const createNewFeedback = async (newFeedbackData: NewFeedbackData) => {
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
		body: JSON.stringify(newFeedbackData),
		headers: { "Content-Type": "application/json" },
	});

	if (!response.ok) {
		const error = new Error("An error occurred while sending the data!");
		throw error;
	}

	const feedback = await response.json();
	return feedback;
};

export const deleteFeedback = async ({ id }: { id: string | undefined }) => {
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
		(feedback) => feedback.id !== id
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
		throw new Error("An error occurred while deleting the data!");
	}

	return updateResponse.json();
};

export const editFeedback = async ({
	id,
	formData,
}: {
	id: string | undefined;
	formData: TFeedbackFormSchema;
}) => {
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
		(feedback) => feedback.id === id
	);

	const currentFeedbackItemIndex = allFeedbackData.indexOf(
		updatedFeedbackData[0]
	);
	const editedFeedback = { ...updatedFeedbackData[0], ...formData };

	// Update the data in Firebase
	const updateResponse = await fetch(
		`https://product-feedback-app-bc088-default-rtdb.europe-west1.firebasedatabase.app/productRequests/${currentFeedbackItemIndex}.json`,
		{
			method: "PUT",
			body: JSON.stringify(editedFeedback),
			headers: { "Content-Type": "application/json" },
		}
	);

	if (!updateResponse.ok) {
		throw new Error("An error occurred while updating the data!");
	}

	return updateResponse.json();
};

export const addNewComment = async ({
	id,
	comment,
}: {
	id: string;
	comment: Comment;
}) => {
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
		(feedback) => feedback.id === id
	);
	const currentFeedbackItemIndex = allFeedbackData.indexOf(
		updatedFeedbackData[0]
	);

	const addCommentToData = (
		currentData: SingleProductRequestsData,
		commentToAdd: Comment
	) => {
		if (!Array.isArray(currentData.comments)) {
			currentData.comments = [commentToAdd];
		} else {
			currentData.comments.push(commentToAdd);
		}
		return currentData;
	};

	const newDataWithComment = addCommentToData(updatedFeedbackData[0], comment);

	// Construct URL with the next index as the key
	const url = `https://product-feedback-app-bc088-default-rtdb.europe-west1.firebasedatabase.app/productRequests/${currentFeedbackItemIndex}.json`;

	// Send data to the constructed URL
	const response = await fetch(url, {
		method: "PUT",
		body: JSON.stringify(newDataWithComment),
		headers: { "Content-Type": "application/json" },
	});

	if (!response.ok) {
		const error = new Error("An error occurred while sending the data!");
		throw error;
	}

	const feedbackComment = await response.json();
	return feedbackComment;
};

export const addCommentReply = async ({
	postId,
	commentId,
	comment,
}: {
	postId: string;
	commentId: string;
	comment: Reply;
}) => {
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
		(feedback) => feedback.id === postId
	);

	const updatedReplyData = updatedFeedbackData[0].comments.filter(
		(comment) => comment.id === commentId
	);

	const currentFeedbackItemIndex = allFeedbackData.indexOf(
		updatedFeedbackData[0]
	);

	const currentReplyItemIndex = updatedFeedbackData[0].comments.indexOf(
		updatedReplyData[0]
	);

	const addReplyToData = (
		mainObject: any,
		replyToAdd: Reply
	) => {
		console.log(replyToAdd);
		// Check if the replies array exists
		if (!mainObject.comments || !Array.isArray(mainObject.comments)) {
			// If not, create the comments array and add the reply to it
			mainObject.comments = [
				{
					replies: [replyToAdd],
				},
			];
		} else {
			// Find the first comment and its replies array
			const firstComment = mainObject.comments[currentReplyItemIndex];
			const repliesArray = firstComment.replies;

			// Check if the replies array exists
			if (!repliesArray || !Array.isArray(repliesArray)) {
				// If not, create the replies array and add the reply to it
				firstComment.replies = [replyToAdd];
			} else {
				// If yes, push the reply to the replies array
				repliesArray.push(replyToAdd);
			}
		}

		// Return the updated mainObject
		return mainObject;
	};

	const newDataWithReply = addReplyToData(updatedFeedbackData[0], comment);

	// Construct URL with the next index as the key
	const url = `https://product-feedback-app-bc088-default-rtdb.europe-west1.firebasedatabase.app/productRequests/${currentFeedbackItemIndex}.json`;

	// Send data to the constructed URL
	const response = await fetch(url, {
		method: "PUT",
		body: JSON.stringify(newDataWithReply),
		headers: { "Content-Type": "application/json" },
	});

	if (!response.ok) {
		const error = new Error("An error occurred while sending the data!");
		throw error;
	}

	const feedbackComment = await response.json();
	return feedbackComment;
};

// export const addUpvote = async ({
// 	id,
// 	updatedFeedback,
// }: {
// 	id: any;
// 	updatedFeedback: any;
// }) => {
// 	// Fetch all feedback data
// 	const existingDataResponse = await fetch(
// 		"https://product-feedback-app-bc088-default-rtdb.europe-west1.firebasedatabase.app/productRequests.json",
// 		{ method: "GET", headers: { "Content-Type": "application.json" } }
// 	);

// 	if (!existingDataResponse.ok) {
// 		throw new Error("Data could not be fetched!");
// 	}

// 	let allFeedbackData: ProductRequestsData = await existingDataResponse.json();

// 	// Filter out the item with the provided ID
// 	const updatedFeedbackData = allFeedbackData.filter(
// 		(feedback) => feedback.id === id
// 	);

// 	// console.log(updatedFeedbackData[0]);
// 	// console.log(updatedFeedback);

// 	const currentFeedbackItemIndex = allFeedbackData.indexOf(
// 		updatedFeedbackData[0]
// 	);
// 	const editedFeedback = {
// 		...updatedFeedbackData[0],
// 		upvotes: updatedFeedback,
// 	};
// 	// console.log(editedFeedback);

// 	// Update the data in Firebase
// 	const updateResponse = await fetch(
// 		`https://product-feedback-app-bc088-default-rtdb.europe-west1.firebasedatabase.app/productRequests/${currentFeedbackItemIndex}.json`,
// 		{
// 			method: "PUT",
// 			body: JSON.stringify(editedFeedback),
// 			headers: { "Content-Type": "application/json" },
// 		}
// 	);

// 	if (!updateResponse.ok) {
// 		throw new Error("An error occurred while updating the data!");
// 	}

// 	return updateResponse.json();
// };

export const addUpvote = async ({
	id,
	updatedFeedback,
	username,
}: {
	id: string;
	updatedFeedback: number;
	username: string;
}) => {
	// Fetch all feedback data
	const existingDataResponse = await fetch(
		"https://product-feedback-app-bc088-default-rtdb.europe-west1.firebasedatabase.app/productRequests.json",
		{ method: "GET", headers: { "Content-Type": "application/json" } }
	);

	if (!existingDataResponse.ok) {
		throw new Error("Data could not be fetched!");
	}

	let allFeedbackData: ProductRequestsData = await existingDataResponse.json();

	// Find the index of the item with the provided ID
	const currentIndex = allFeedbackData.findIndex(
		(feedback) => feedback.id === id
	);

	if (currentIndex === -1) {
		throw new Error("Item with the provided ID not found!");
	}

	// If the item with the ID exists
	const upvotedBy = allFeedbackData[currentIndex]?.upvotedBy || [];

	// If user has already upvoted, remove the upvote
	if (upvotedBy.includes(username)) {
		const updatedUpvotedBy = upvotedBy.filter((user) => user !== username);
		allFeedbackData[currentIndex].upvotedBy = updatedUpvotedBy;
	} else {
		// Add user to upvotedBy array
		allFeedbackData[currentIndex].upvotedBy = [...upvotedBy, username];
	}

	// Update upvotes count
	allFeedbackData[currentIndex].upvotes = updatedFeedback;

	// Update the data in Firebase
	const updateResponse = await fetch(
		`https://product-feedback-app-bc088-default-rtdb.europe-west1.firebasedatabase.app/productRequests/${currentIndex}.json`,
		{
			method: "PUT",
			body: JSON.stringify(allFeedbackData[currentIndex]),
			headers: { "Content-Type": "application/json" },
		}
	);

	if (!updateResponse.ok) {
		throw new Error("An error occurred while updating the data!");
	}

	return updateResponse.json();
};
