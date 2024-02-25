// HOOKS
import useCurrentUserData from "../../../../hooks/useCurrentUserData";
// IMAGES
import desktopBackground from "../../../../assets/suggestions/desktop/background-header.png";
import tabletBackground from "../../../../assets/suggestions/tablet/background-header.png";
import mobileBackground from "../../../../assets/suggestions/mobile/background-header.png";
import burgerIcon from "../../../../assets/icons/mobile/icon-hamburger.svg";
import closeIcon from "../../../../assets/icons/mobile/icon-close.svg";

const AppHeader = ({
	toggleValue,
	toggleFunction,
}: {
	toggleValue: boolean;
	toggleFunction: () => void;
}) => {
	const currentUserData = useCurrentUserData();

	return (
		<div className="relative md:w-1/3 lg:w-full">
			<picture>
				<source srcSet={desktopBackground} media="(min-width: 1024px)" />
				<source srcSet={tabletBackground} media="(min-width: 768px)" />
				<img
					src={mobileBackground}
					alt="Gradient background for page header"
					className="w-full h-full md:rounded-xl md:w-auto"
				/>
			</picture>
			<div className="absolute bottom-0 left-0 flex flex-row items-center justify-between w-full h-full p-4 md:block md:w-auto md:h-auto">
				<div className="space-y-2">
					<h1 className="font-bold text-lg text-white md:text-xl">
						Feedback Nexus
					</h1>
					<div>
						<p className="hidden text-xs text-white/75 md:block">
							logged in as:
						</p>
						{currentUserData && (
							<p className="text-sm text-white/75">
								<span className="font-bold">{currentUserData.name}</span> (
								{currentUserData.username})
							</p>
						)}
					</div>
				</div>

				<button className="md:hidden" onClick={toggleFunction}>
					{!toggleValue ? (
						<img src={burgerIcon} alt="" />
					) : (
						<img src={closeIcon} alt="" />
					)}
				</button>
			</div>
		</div>
	);
};

export default AppHeader;
