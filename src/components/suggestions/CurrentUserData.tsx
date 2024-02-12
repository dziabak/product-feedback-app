import { useQuery } from "@tanstack/react-query";
import { fetchCurrentUserData } from "../../lib/http";
import BackgroundFrame from "../ui/BackgroundFrame";

const CurrentUserData = () => {
	const { data } = useQuery({
		queryKey: ["user"],
		queryFn: fetchCurrentUserData,
	});

	let userContent!: JSX.Element;
	if (data) {
		userContent = (
			<div className="flex items-start">
				<img
					src={data.image}
					alt="User photo"
					className="w-12 mr-8 rounded-full"
				/>
				<div className="space-y-4">
					<div className="flex items-center justify-between">
						<div>
							<p className="font-bold text-base text-black">{data.name}</p>
							<p className="text-sm text-c-dark-gray">{data.username}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
	return <BackgroundFrame>{userContent}</BackgroundFrame>;
};

export default CurrentUserData;
