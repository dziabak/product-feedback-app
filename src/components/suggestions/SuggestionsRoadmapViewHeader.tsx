// BUILT-IN IMPORTS
import { Link } from "react-router-dom";

const SuggestionsRoadmapViewHeader = () => {
	return (
		<div className="flex items-end justify-between mb-4">
			<p className="text-lg font-bold text-c-dark-blue">Roadmap</p>
			<Link
				to="/roadmap"
				className="text-sm font-semibold underline text-c-light-blue">
				View
			</Link>
		</div>
	);
};

export default SuggestionsRoadmapViewHeader;
