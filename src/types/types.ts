export type FeedbackData = {
	productRequests: {
		id: string;
		title: string;
		category: string;
		upvotes: number;
		status: string;
		description: string;
		author: { image: string; name: string; username: string };
		comments: {
			id: string;
			content: string;
			user: { image: string; name: string; username: string };
			replies?: {
				content: string;
				replyingTo: string;
				user: { image: string; name: string; username: string };
			}[];
		}[];
	}[];
	currentUser: { image: string; name: string; username: string };
};

export type CurrentUserData = { image: string; name: string; username: string };

export type ProductRequestsData = {
	id: string;
	title: string;
	category: string;
	upvotes: number;
	status: string;
	description: string;
	author: { image: string; name: string; username: string };
	comments: {
		id: string;
		content: string;
		user: { image: string; name: string; username: string };
		replies?: {
			content: string;
			replyingTo: string;
			user: { image: string; name: string; username: string };
		}[];
	}[];
}[];

export type SingleProductRequestsData = ProductRequestsData[number];

export type Comment = {
	id: string;
	content: string;
	user: { image: string; name: string; username: string };
	replies?: {
		content: string;
		replyingTo: string;
		user: { image: string; name: string; username: string };
	}[];
};
