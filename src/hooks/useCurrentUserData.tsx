import { useQuery } from "@tanstack/react-query";
import { fetchCurrentUserData } from "../lib/http";

const useCurrentUserData = () => {
	const { data: currentUserData } = useQuery({
		queryKey: ["user"],
		queryFn: fetchCurrentUserData,
	});

	return currentUserData;
};

export default useCurrentUserData;
