// REACT
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// LIBRARIES
import clsx from "clsx";
import { useOnClickOutside, useLockedBody } from "usehooks-ts";
// IMAGES
import newFeedbackIcon from "../../../assets/icons/icon-new-feedback.svg";
import editFeedbackIcon from "../../../assets/icons/icon-edit-feedback.svg";

const FeedbackFormModal = ({
	children,
	isPending,
}: {
	children: JSX.Element;
	isPending: boolean;
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
			data-cy={"form-dialog"}
			ref={dialogRef}
			className={clsx(
				"fixed top-0 left-0 w-full bg-c-dark-blue/0 transition-all duration-300 backdrop:bg-c-dark-blue/50 backdrop:backdrop-blur backdrop:cursor-pointer no-scrollbar",
				!isModalOpen && "opacity-0",
				isModalOpen && "opacity-100",
				!isPending && "cursor-pointer"
			)}>
			<div className="flex flex-col items-center justify-center w-full md:h-full">
				<div
					ref={contentRef}
					className={clsx(
						"relative z-20 p-8 rounded-[10px] bg-white cursor-default transition-all duration-500 overflow-hidden md:w-[540px]",
						!isModalOpen && "-translate-y-16",
						isModalOpen && "translate-y-0"
					)}>
					<img
						src={renderedIcon}
						alt="Icon for a feedback form"
						className="hidden absolute top-0 right-0 -m-8 w-32 h-32 opacity-25 md:block"
					/>
					{children}
				</div>
			</div>
		</dialog>
	);
};

export default FeedbackFormModal;
