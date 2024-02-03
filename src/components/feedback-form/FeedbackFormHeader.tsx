import { Link } from "react-router-dom";

const FeedbackFormHeader = () => {
	return (
		<div className="flex flex-col py-12 space-y-2">
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
		</div>
	);
};

export default FeedbackFormHeader;
