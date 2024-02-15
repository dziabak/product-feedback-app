// INTERNAL IMPORTS
import desktopBackground from "../../../assets/suggestions/desktop/background-header.png";
import tabletBackground from "../../../assets/suggestions/tablet/background-header.png";
import mobileBackground from "../../../assets/suggestions/mobile/background-header.png";

import burgerIcon from "../../../assets/icons/mobile/icon-hamburger.svg";

const SuggestionsAppLogo = () => {
	return (
		<div className="relative">
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
				<div>
					<h1 className="font-bold text-white md:text-xl">Frontend Mentor</h1>
					<p className="text-sm text-white/75 md:text-base">Feedback Board</p>
				</div>
				<img src={burgerIcon} alt="" className="md:hidden" />
			</div>
		</div>
	);
};

export default SuggestionsAppLogo;
