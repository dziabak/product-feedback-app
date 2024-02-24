// REACT
import { Link } from "react-router-dom";
// COMPONENTS
import LinkButton from "../ui/LinkButton";

const FeedbackDetailsHeader = ({ id }: { id: string | undefined }) => {
	return (
		<div className="flex justify-between mb-8">
			<Link
				to="/"
				className="group flex items-center text-sm font-bold text-c-dark-gray">
				<svg
					className="mr-3"
					width="7"
					height="10"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M6 9L2 5l4-4"
						stroke="#4661E6"
						strokeWidth="2"
						fill="none"
						fillRule="evenodd"
					/>
				</svg>
				<span className="relative">
					Go Back
					<span className="absolute bottom-0 left-0 h-[0.1rem] bg-c-dark-gray w-0 transition-all duration-300 group-hover:w-full"></span>
				</span>
			</Link>
			<LinkButton
				linkTo={`/feedback/${id}/edit`}
				text="Edit Feedback"
				color="light-blue"
			/>
		</div>
	);
};

export default FeedbackDetailsHeader;
