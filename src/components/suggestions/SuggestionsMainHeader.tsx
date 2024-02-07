// INTERNAL IMPORTS
import LinkButton from "../ui/LinkButton";
import headerIcon from "../../assets/suggestions/icon-suggestions.svg"

const SuggestionsMainHeader = () => {
	return (
		<div className="flex justify-between p-4 rounded-lg bg-c-dark-blue dark:bg-c-dark-header">
			<div className="flex items-center">
				<img src={headerIcon} alt="Icon of a lightbulb" className="mr-4"/>
				<p className="mr-8 text-lg font-bold text-white">6 Suggestion</p>
				<p className="text-sm text-white">
					Sort by: <span className="font-bold">Most Upvotes</span>
				</p>
			</div>
			<LinkButton
				linkTo="/new-feedback"
				color="magenta"
				text="+ Add Feedback"
			/>
		</div>
	);
};

export default SuggestionsMainHeader;
