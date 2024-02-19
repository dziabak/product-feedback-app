// TYPES
import { ProductRequestsData } from "../../../types/types";
// COMPONENTS
import SuggestionsSortingForm from "./SuggestionsSortingForm";
import LinkButton from "../../ui/LinkButton";
// IMAGES
import headerIcon from "../../../assets/suggestions/icon-suggestions.svg";

const SuggestionsContentHeader = ({
	filteredData,
	onDataSorted,
}: {
	filteredData: ProductRequestsData | undefined;
	onDataSorted: (arg0: ProductRequestsData) => void;
}) => {
	const handleSortedData = (sortedData: ProductRequestsData) => {
		onDataSorted(sortedData);
	};

	let headerText;

	if (filteredData) {
		if (filteredData.length === 1) {
			headerText = (
				<p className="mr-8 pr-1 text-lg font-bold text-white">
					{filteredData.length} Suggestion
				</p>
			);
		} else {
			headerText = (
				<p className="mr-8 text-lg font-bold text-white">
					{filteredData.length} Suggestions
				</p>
			);
		}
	}

	return (
		<div className="flex items-center justify-between px-6 py-4 bg-c-dark-blue dark:bg-c-dark-header md:rounded-lg">
			<div className="flex items-center">
				<div className="hidden md:flex md:items-center ">
					<img src={headerIcon} alt="Icon of a lightbulb" className="mr-4" />
					{headerText}
				</div>
				<SuggestionsSortingForm
					filteredData={filteredData}
					onDataSorted={handleSortedData}
				/>
			</div>
			<LinkButton
				linkTo="/new-feedback"
				color="magenta"
				text="+ Add Feedback"
			/>
		</div>
	);
};

export default SuggestionsContentHeader;
