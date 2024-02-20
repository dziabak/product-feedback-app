// LIBRARIES
import { z } from "zod";
import { UseFormRegisterReturn, FieldErrors } from "react-hook-form";

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

export const feedbackFormSchema = z.object({
	title: z.string().min(1, "This can't be empty!").max(30),
	category: z.string(),
	status: z.string().optional(),
	description: z.string().min(1, "This can't be empty!").max(250),
});

export type TFeedbackFormSchema = z.infer<typeof feedbackFormSchema>;

export type FormField = {
	register: UseFormRegisterReturn<string>;
	errors: FieldErrors<TFeedbackFormSchema>;
};
