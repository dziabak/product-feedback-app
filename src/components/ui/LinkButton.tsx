// REACT
import { Link } from "react-router-dom";
// LIBRARIES
import clsx from "clsx";

const LinkButton = ({
	linkTo,
	text,
	color,
	mobile,
}: {
	linkTo: string;
	text: string;
	color: "magenta" | "light-blue" | "dark-blue" | "red";
	mobile?: boolean;
}) => {
	return (
		<Link
			to={linkTo}
			className={clsx(
				`px-4 py-3 text-sm text-center font-bold whitespace-nowrap transition-colors rounded-[10px] text-white md:px-6`,
				color === "magenta" && "bg-c-magenta hover:bg-c-magenta-hover",
				color === "light-blue" && "bg-c-light-blue hover:bg-c-light-blue-hover",
				color === "dark-blue" && "bg-c-dark-blue hover:bg-c-dark-blue-hover",
				color === "red" && "bg-c-red hover:bg-c-red-hover",
				mobile && "w-full md:w-fit"
			)}>
			{text}
		</Link>
	);
};

export default LinkButton;
