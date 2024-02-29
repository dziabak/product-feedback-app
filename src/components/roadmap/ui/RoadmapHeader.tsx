// REACT
import { Link } from "react-router-dom";
// COMPONENTS
import LinkButton from "../../ui/buttons/LinkButton";

const RoadmapHeader = () => {
	return (
		<div className="flex justify-between items-center px-8 py-6 bg-c-dark-blue md:rounded-[10px]">
			<div className="flex flex-col space-y-2">
				<Link
					to="/"
					className="group flex items-center text-sm font-bold text-white">
					<svg
						className="mr-3"
						width="7"
						height="10"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M6 9L2 5l4-4"
							stroke="#CDD2EE"
							strokeWidth="2"
							fill="none"
							fillRule="evenodd"
						/>
					</svg>
					<span className="relative">
						Go Back
						<span className="absolute bottom-0 left-0 h-[0.1rem] bg-white w-0 transition-all duration-300 group-hover:w-full"></span>
					</span>
				</Link>
				<p className="mr-8 text-xl font-bold text-white md:text-2xl">Roadmap</p>
			</div>
			<LinkButton
				linkTo="/roadmap/new-feedback"
				color="magenta"
				text="+ Add Feedback"
			/>
		</div>
	);
};

export default RoadmapHeader;
