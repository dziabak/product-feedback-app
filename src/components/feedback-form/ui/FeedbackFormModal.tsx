//BUILT-IN IMPORTS
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
//EXTERNAL IMPORTS
import clsx from "clsx";
import { useOnClickOutside, useLockedBody } from "usehooks-ts";
import newFeedbackIcon from "../../../assets/icons/icon-new-feedback.svg";
import editFeedbackIcon from "../../../assets/icons/icon-edit-feedback.svg";

const FeedbackFormModal = ({
	children,
	isPending,
}: {
	children: JSX.Element;
	isPending: any;
}) => {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);

	const navigate = useNavigate();

	const [isModalOpen, setIsModalOpen] = useState(false);
	useEffect(() => {
		setIsModalOpen(true);
		dialogRef.current?.showModal();
	}, []);

	const handleClickOutside = () => {
		if (!isPending) {
			navigate("..");
		}
	};

	useOnClickOutside(contentRef, handleClickOutside);
	useLockedBody(isModalOpen, "root");

	const location = useLocation();
	let renderedIcon: string;

	if (location.pathname.includes("/new-feedback")) {
		renderedIcon = newFeedbackIcon;
	} else {
		renderedIcon = editFeedbackIcon;
	}

	return (
		<dialog
			ref={dialogRef}
			className={clsx(
				"fixed top-0 left-0 w-full h-full bg-c-dark-blue/0 transition-all duration-300 backdrop:bg-c-dark-blue/50 backdrop:backdrop-blur backdrop:cursor-pointer",
				!isModalOpen && "opacity-0",
				isModalOpen && "opacity-100",
				!isPending && "cursor-pointer"
			)}>
			<div className="flex flex-col items-center justify-center w-full md:h-full">
				<div
					ref={contentRef}
					className={clsx(
						"relative z-20 w-full p-8 rounded-lg bg-white cursor-default transition-all duration-500 md:w-auto",
						!isModalOpen && "-translate-y-16",
						isModalOpen && "translate-y-0"
					)}>
					<img
						src={renderedIcon}
						alt="Icon for a feedback form"
						className="hidden absolute top-0 -mt-8 w-14 h-14 md:block"
					/>
					{children}
				</div>
			</div>
		</dialog>
	);
};

export default FeedbackFormModal;
