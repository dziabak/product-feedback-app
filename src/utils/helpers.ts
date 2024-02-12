// TYPES
import { ProductRequestsData, Comment } from "../types/types";

export const capitalizeString = (string: string) => {
	if (string.length <= 2) {
		return string.toUpperCase();
	} else {
		return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
	}
};

export const getTotalCommentsAndRepliesNumberFromFullDataSet = (
	data: ProductRequestsData
) => {
	return data.reduce((total, product) => {
		const commentsLength = product.comments ? product.comments.length : 0;
		const repliesLength = product.comments
			? product.comments.reduce(
					(total, comment) =>
						total + (comment.replies ? comment.replies.length : 0),
					0
			  )
			: 0;

		return total + commentsLength + repliesLength;
	}, 0);
};

export const getTotalCommentsAndRepliesNumberFromReplyData = (
	comments?: Comment[]
) => {
	if (!comments) return 0; // If comments array is undefined, return 0
	return comments.reduce((total, comment) => {
		const repliesLength = comment.replies ? comment.replies.length : 0;
		return total + 1 + repliesLength; // Adding 1 for the comment itself
	}, 0);
};

export const generateRandomId = () => {
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let randomId = "";
	for (let i = 0; i < 8; i++) {
		randomId += characters.charAt(
			Math.floor(Math.random() * characters.length)
		);
	}
	return randomId;
};
