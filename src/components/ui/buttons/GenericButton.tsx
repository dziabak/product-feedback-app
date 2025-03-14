// REACT
import { ButtonHTMLAttributes } from "react";
// LIBRARIES
import clsx from "clsx";

type GenericButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	text: string;
	color: "magenta" | "light-blue" | "dark-blue" | "red";
	mobile?: boolean;
	cy?: string;
};

const GenericButton = ({
	text,
	color,
	mobile,
	cy,
	...props
}: GenericButtonProps) => {
	return (
		<button
			data-cy={cy}
			{...props}
			className={clsx(
				`px-4 py-3 text-sm text-center font-bold whitespace-nowrap transition-colors rounded-[10px] border border-transparent text-white md:px-6 disabled:bg-c-dark-gray`,
				color === "magenta" &&
					"bg-c-magenta hover:bg-c-magenta-hover focus:outline-none focus:ring focus:ring-c-magenta",
				color === "light-blue" &&
					"bg-c-light-blue hover:bg-c-light-blue-hover focus:outline-none focus:ring focus:ring-c-light-blue",
				color === "dark-blue" &&
					"bg-c-dark-blue hover:bg-c-dark-blue-hover focus:outline-none focus:ring focus:ring-c-dark-blue",
				color === "red" &&
					"bg-c-red hover:bg-c-red-hover focus:outline-none focus:ring focus:ring-c-red",
				mobile && "w-full md:w-fit"
			)}>
			{text}
		</button>
	);
};

export default GenericButton;
