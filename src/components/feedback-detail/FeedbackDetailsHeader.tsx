// REACT
import { Link } from "react-router-dom";

const FeedbackDetailsHeader = ({ id }: { id: string | undefined }) => {
	return (
		<div className="flex justify-between mb-8">
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
			<Link
				to={`/feedback/${id}/edit`}
				className="px-6 py-3 text-sm font-bold transition-colors rounded-lg bg-c-light-blue text-white hover:bg-c-light-blue/75">
				Edit Feedback
			</Link>
		</div>
	);
};

export default FeedbackDetailsHeader;
