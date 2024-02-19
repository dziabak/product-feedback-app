// REACT
import { Link } from "react-router-dom";

const SuggestionsRoadmapViewHeader = () => {
	return (
		<div className="flex items-end justify-between mb-4">
			<p className="text-lg font-bold text-c-dark-blue dark:text-c-light-gray">
				Roadmap
			</p>
			<Link
				to="/roadmap"
				className="text-sm font-semibold underline transition-colors text-c-light-blue dark:text-c-light-gray hover:text-c-light-blue/75">
				View
			</Link>
		</div>
	);
};

export default SuggestionsRoadmapViewHeader;
