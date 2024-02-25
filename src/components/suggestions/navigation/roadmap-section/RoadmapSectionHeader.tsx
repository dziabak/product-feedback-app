// REACT
import { Link } from "react-router-dom";

const RoadmapSectionHeader = () => {
	return (
		<Link to="/roadmap" className="group flex items-end justify-between mb-4">
			<p className="text-lg font-bold text-c-dark-blue dark:text-c-light-gray">
				Roadmap
			</p>
			<p className="relative text-sm font-semibold transition-colors text-c-light-blue dark:text-c-light-gray">
				View
				<span className="absolute bottom-0 left-0 h-[0.15rem] bg-c-light-blue w-0 group-hover:w-full transition-all duration-300"></span>
			</p>
		</Link>
	);
};

export default RoadmapSectionHeader;
