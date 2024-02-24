// REACT
import { ButtonHTMLAttributes } from "react";
// LIBRARIES
import clsx from "clsx";

type GenericButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	text: string;
	color: "magenta" | "light-blue" | "dark-blue" | "red";
	mobile?: boolean;
};

const GenericButton = ({
	text,
	color,
	mobile,
	...props
}: GenericButtonProps) => {
	return (
		<button
			{...props}
			className={clsx(
				`px-4 py-3 text-sm text-center font-bold whitespace-nowrap transition-colors rounded-[10px] text-white md:px-6 disabled:bg-c-dark-gray`,
				color === "magenta" && "bg-c-magenta hover:bg-c-magenta-hover",
				color === "light-blue" && "bg-c-light-blue hover:bg-c-light-blue-hover",
				color === "dark-blue" && "bg-c-dark-blue hover:bg-c-dark-blue-hover",
				color === "red" && "bg-c-red hover:bg-c-red-hover",
				mobile && "w-full md:w-fit"
			)}>
			{text}
		</button>
	);
};

export default GenericButton;
