// COMPONENTS
import CurrentUserData from "./CurrentUserData";
// IMAGES
import desktopBackground from "../../../../assets/suggestions/desktop/background-header.png";
import tabletBackground from "../../../../assets/suggestions/tablet/background-header.png";
import mobileBackground from "../../../../assets/suggestions/mobile/background-header.png";
import burgerIcon from "../../../../assets/icons/mobile/icon-hamburger.svg";
import closeIcon from "../../../../assets/icons/mobile/icon-close.svg";

const AppLogo = ({
	toggleValue,
	toggleFunction,
}: {
	toggleValue: boolean;
	toggleFunction: () => void;
}) => {
	return (
		<div className="relative md:w-1/3 lg:w-full">
			<picture>
				<source srcSet={desktopBackground} media="(min-width: 1024px)" />
				<source srcSet={tabletBackground} media="(min-width: 768px)" />
				<img
					src={mobileBackground}
					alt="Gradient background for page header"
					className="w-full h-full md:rounded-[10px] md:w-auto"
				/>
			</picture>
			<div className="absolute bottom-0 left-0 flex flex-row items-center justify-between w-full h-full p-4 md:block md:w-auto md:h-full">
				<div className="md:h-full md:flex md:flex-col md:justify-between md:py-2 lg:justify-end lg:py-0 lg:space-y-4">
					<h1 className="font-bold text-lg text-white md:text-xl md:leading-5">
						Feedback Nexus
					</h1>
					<CurrentUserData />
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

export default AppLogo;
