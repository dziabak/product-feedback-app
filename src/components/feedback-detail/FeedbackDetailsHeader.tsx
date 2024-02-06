// BUILT-IN IMPORTS
import { Link } from "react-router-dom";
// INTERNAL IMPORTS
import GenericButton from "../ui/GenericButton";

const FeedbackDetailsHeader = () => {
	return (
		<div className="flex justify-between py-12">
			<Link
				to=".."
				className="flex items-center text-sm font-bold text-c-dark-gray">
				<svg
					className="mr-2"
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
				Go Back
			</Link>
			<GenericButton text="Edit Feedback" color="light-blue" />
		</div>
	);
};

export default FeedbackDetailsHeader;
