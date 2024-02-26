import { useEffect, useState } from "react";
import { queryClient, addUpvote } from "../lib/http";
import { useMutation } from "@tanstack/react-query";
import useCurrentUserData from "./useCurrentUserData";

const useAddUpvote = (
	id: string,
	upvotes: number,
	upvotedBy: string[] | undefined
) => {
	const currentUserData = useCurrentUserData();

	const [upvotesCount, setUpvotesCount] = useState(upvotes);
	const [isUpvotedByCurrentUser, setIsUpvotedByCurrentUser] = useState(false);

	// console.log(upvotedBy?.includes(currentUserData?.username));

	useEffect(() => {
		if (upvotedBy?.includes(currentUserData?.username)) {
			setIsUpvotedByCurrentUser(true);
		}
	}, [currentUserData]);

	const { mutate } = useMutation({
		mutationFn: addUpvote,
		onSuccess: () => {
			queryClient.invalidateQueries({
				refetchType: "all",
			});
		},
	});

	const addUpvoteHandler = () => {
		if (isUpvotedByCurrentUser) {
			setUpvotesCount((prevUpvotesCount) => {
				const newCount = prevUpvotesCount - 1;
				mutate({
					id: id,
					updatedFeedback: newCount,
					username: currentUserData?.username,
				});
				return newCount;
			});
			setIsUpvotedByCurrentUser(false);
		} else {
			setUpvotesCount((prevUpvotesCount) => {
				const newCount = prevUpvotesCount + 1;
				mutate({
					id: id,
					updatedFeedback: newCount,
					username: currentUserData?.username,
				});
				return newCount;
			});
			setIsUpvotedByCurrentUser(true);
		}
	};
	return { addUpvoteHandler, upvotesCount, isUpvotedByCurrentUser };
};

export default useAddUpvote;
