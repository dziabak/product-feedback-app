// REACT
import { Link } from "react-router-dom";
// COMPONETS
import LinkButton from "../components/ui/LinkButton";
import ErrorBlock from "../components/ui/ErrorBlock";
// IMAGES
import image from "../assets/suggestions/illustration-empty.svg";

const ErrorLayout = () => {
	return (
		<div className="container">
			<div className="flex flex-col justify-between h-screen bg-c-gray md:p-4">
				<div className="p-6 bg-c-dark-blue md:rounded-[10px]">
                    <Link to=".." className="text-xl font-bold text-white md:text-2xl">Feedback Nexus</Link>
				</div>

				<div className="flex flex-col justify-center items-center h-full p-8 space-y-8">
					<img
						src={image}
						alt="Icon of a person looking through a magnifying glass"
						className="w-44"
					/>
					<ErrorBlock
						errorHeader="This page does not exist"
						errorMessage="Please return to the homepage"
					/>
					<LinkButton color="magenta" linkTo=".." text="Return" mobile />
				</div>
			</div>
		</div>
	);
};

export default ErrorLayout;
