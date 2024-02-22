// LIBRARIES
import { useQuery } from "@tanstack/react-query";
// DATA
import { fetchCurrentUserData } from "../lib/http";

const useCurrentUserData = () => {
	const { data: currentUserData, isError } = useQuery({
		queryKey: ["user"],
		queryFn: fetchCurrentUserData,
		retry: false,
	});

	if (isError) {
		const guestUserData = {
			image: "/assets/user-images/image-guest.svg",
			name: "Guest",
			username: "guest",
		};

		return guestUserData;
	}

	return currentUserData;
};

export default useCurrentUserData;
