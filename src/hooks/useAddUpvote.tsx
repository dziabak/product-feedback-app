import { useState } from "react";
import { queryClient, addUpvote } from "../lib/http";
import { useToggle } from "usehooks-ts";
import { useMutation } from "@tanstack/react-query";

const useAddUpvote = (id: string, upvotes: number) => {
	const [upvotesCount, setUpvotesCount] = useState(upvotes);
	const [canAddUpvote, toggleCanAddUpvote] = useToggle(true);

	const { mutate } = useMutation({
		mutationFn: addUpvote,
		onSuccess: () => {
			queryClient.invalidateQueries();
		},
	});

	const addUpvoteHandler = () => {
		if (canAddUpvote) {
			setUpvotesCount((prevUpvotesCount) => {
				const newCount = prevUpvotesCount + 1;
				mutate({ id: id, updatedFeedback: newCount });
				return newCount;
			});
			toggleCanAddUpvote();
		} else {
			setUpvotesCount((prevUpvotesCount) => {
				const newCount = prevUpvotesCount - 1;
				mutate({ id: id, updatedFeedback: newCount });
				return newCount;
			});
			toggleCanAddUpvote();
		}
	};
	return { addUpvoteHandler, upvotesCount, canAddUpvote };
};

export default useAddUpvote;
