import useCurrentUserData from "../../../hooks/useCurrentUserData";
import BackgroundFrame from "../../ui/BackgroundFrame";

const CurrentUserData = () => {
	const currentUserData = useCurrentUserData();

	let userContent!: JSX.Element;
	if (currentUserData) {
		userContent = (
			<div className="flex items-start">
				<img
					src={currentUserData.image}
					alt="User photo"
					className="w-12 mr-8 rounded-full"
				/>
				<div className="space-y-4">
					<div className="flex items-center justify-between">
						<div>
							<p className="font-bold text-base text-black">
								{currentUserData.name}
							</p>
							<p className="text-sm text-c-dark-gray">
								{currentUserData.username}
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
	return <BackgroundFrame>{userContent}</BackgroundFrame>;
};

export default CurrentUserData;
