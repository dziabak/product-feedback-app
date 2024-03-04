// HOOKS
import useCurrentUserData from "../../../../hooks/useCurrentUserData";

const CurrentUserData = () => {
	const currentUserData = useCurrentUserData();

	let userContent!: JSX.Element;
	if (currentUserData) {
		userContent = (
			<div>
				<p className="hidden text-xs text-white/75 md:block">logged in as:</p>
				<p className="text-sm text-white/75">
					<span className="font-bold text-white/100">
						{currentUserData.name}
					</span>{" "}
					({currentUserData.username})
				</p>
			</div>
		);
	}
	return <>{userContent}</>;
};

export default CurrentUserData;
