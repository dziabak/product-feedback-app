// REACT
import { Link } from "react-router-dom";
// COMPONENTS
import LinkButton from "../ui/LinkButton";

const RoadmapHeader = () => {
	return (
		<div className="flex justify-between items-center p-4 rounded-lg bg-c-dark-blue">
			<div className="flex flex-col space-y-2">
				<Link to="/" className="flex items-center text-sm font-bold text-white">
					<svg
						className="mr-2"
						width="7"
						height="10"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M6 9L2 5l4-4"
							stroke="#FFFFFF"
							strokeWidth="2"
							fill="none"
							fillRule="evenodd"
						/>
					</svg>
					Go Back
				</Link>
				<p className="mr-8 text-2xl font-bold text-white">Roadmap</p>
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
