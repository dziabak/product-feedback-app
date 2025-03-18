// REACT
import { Link, useLocation } from "react-router-dom";
// COMPONENTS
import LinkButton from "../../ui/buttons/LinkButton";

const FeedbackDetailHeader = ({ id }: { id: string | undefined }) => {
	const location = useLocation();

	let link!: string;
	if (location.pathname === `/feedback/${id}`) {
		link = `/feedback/${id}/edit`;
	} else if (location.pathname === `/roadmap/${id}`) {
		link = `/roadmap/${id}/edit`;
	}

	return (
		<div className="flex justify-between mb-8">
			<Link
				data-cy={"feedback-detail-back-btn"}
				to=".."
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
				cy="edit-feedback-btn"
				linkTo={link}
				text="Edit Feedback"
				color="light-blue"
			/>
		</div>
	);
};

export default FeedbackDetailHeader;
