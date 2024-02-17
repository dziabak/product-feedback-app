// REACT
import { Link } from "react-router-dom";

const LinkButton = ({
	linkTo,
	text,
	color,
}: {
	linkTo: string;
	text: string;
	color: string;
}) => {
	return (
		<Link
			to={linkTo}
			className={`flex items-center px-6 py-3 text-sm font-bold transition-colors rounded-lg bg-c-${color} text-white hover:bg-c-${color}/75`}>
			{text}
		</Link>
	);
};

export default LinkButton;
