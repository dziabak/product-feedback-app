//BUILT-IN IMPORTS
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
//EXTERNAL IMPORTS
import clsx from "clsx";
import { useOnClickOutside } from "usehooks-ts";
import newFeedbackIcon from "../../assets/icons/icon-new-feedback.svg";
import editFeedbackIcon from "../../assets/icons/icon-edit-feedback.svg";

const FeedbackFormLayout = ({
	children,
	isPending,
}: {
	children: JSX.Element;
	isPending: any;
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	useEffect(() => {
		setIsModalOpen(true);
	}, []);

	const ref = useRef<HTMLDivElement>(null);
	const navigate = useNavigate();

	const handleClickOutside = () => {
		if (!isPending) {
			navigate("..");
		}
	};

	useOnClickOutside(ref, handleClickOutside);

	const location = useLocation();
	let renderedIcon: string;

	if (location.pathname.includes("/new-feedback")) {
		renderedIcon = newFeedbackIcon;
	} else {
		renderedIcon = editFeedbackIcon;
	}

	return (
		<section
			className={clsx(
				"fixed top-0 left-0 z-10 w-full h-full bg-c-dark-blue/50 backdrop-blur transition-all duration-300",
				!isModalOpen && "opacity-0",
				isModalOpen && "opacity-100",
				!isPending && "cursor-pointer"
			)}>
			<div className="flex flex-col items-center justify-center w-full h-full">
				<div
					ref={ref}
					className={clsx(
						"relative z-20 p-8 rounded-lg bg-white cursor-default transition-all duration-500",
						!isModalOpen && "-mt-16",
						isModalOpen && "mt-0"
					)}>
					<img
						src={renderedIcon}
						alt=""
						className="absolute top-0 -mt-8 w-14 h-14"
					/>
					{children}
				</div>
			</div>
		</section>
	);
};

export default FeedbackFormLayout;
