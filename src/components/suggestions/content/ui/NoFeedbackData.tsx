// COMPONENTS
import LinkButton from "../../../ui/buttons/LinkButton";
// IMAGES
import image from "../../../../assets/suggestions/illustration-empty.svg";

const NoFeedbackData = () => {
	return (
		<div className="flex flex-col items-center px-6 py-16 space-y-12 bg-white rounded-[10px] md:px-24 md:py-24 2xl:px-48">
			<img
				src={image}
				alt="Icon of a person looking through a magnifying glass"
			/>
			<div className="flex flex-col items-center space-y-6 md:space-y-12">
				<div className="space-y-2 text-center">
					<p className="font-bold text-lg text-c-dark-blue">
						There is no feedback yet.
					</p>
					<p className="text-sm text-c-dark-gray md:text-base">
						Got a suggestion? Found a bug that needs to be squashed? We love
						hearing about new ideas to improve our app.
					</p>
				</div>
				<LinkButton
					linkTo="/new-feedback"
					text="+ Add Feedback"
					color="magenta"
				/>
			</div>
		</div>
	);
};

export default NoFeedbackData;
