// BUILT-IN IMPORTS
import { Link } from "react-router-dom";
// INTERNAL IMPORTS
import image from "../../../assets/suggestions/illustration-empty.svg";

const SuggestionsNoFeedbackData = () => {
	return (
		<div className="flex flex-col items-center p-24 space-y-8 bg-white rounded-lg">
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
			<button className="px-6 py-3 text-sm font-bold text-white rounded-lg bg-c-magenta">
				<Link to="/new-feedback">+ Add Feedback</Link>
			</button>
		</div>
	);
};

export default SuggestionsNoFeedbackData;
