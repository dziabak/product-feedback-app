// INTERNAL IMPORTS
import CategoryLabel from "../../ui/CategoryLabel";
import BackgroundFrame from "../../ui/BackgroundFrame";

const SuggestionsCategoryFilter = () => {
	const CATEGORY_DATA = ["all", "ui", "ux", "enhancement", "bug", "feature"];

	return (
		<BackgroundFrame>
			{CATEGORY_DATA.map((item) => (
				<CategoryLabel category={item} key={item} />
			))}
		</BackgroundFrame>
	);
};

export default SuggestionsCategoryFilter;
