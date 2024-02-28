// COMPONENTS
import LinkButton from "../../../ui/LinkButton";
// IMAGES
import image from "../../../../assets/suggestions/illustration-empty.svg";

const NoFeedbackData = () => {
	return (
		<div className="flex flex-col items-center p-24 space-y-8 bg-white rounded-[10px]">
			<img
				src={image}
				alt="Icon of a person looking through a magnifying glass"
			/>
			<div className="text-center space-y-2">
				<p className="font-bold text-c-dark-blue">There is no feedback yet.</p>
				<div>
					<p className="text-c-dark-gray">
						Got a suggestion? Found a bug that needs to be squashed?
					</p>
					<p className="text-c-dark-gray">
						We love hearing about new ideas to improve our app.
					</p>
				</div>
			</div>
			<LinkButton
				linkTo="/new-feedback"
				text="+ Add Feedback"
				color="magenta"
			/>
		</div>
	);
};

export default NoFeedbackData;
