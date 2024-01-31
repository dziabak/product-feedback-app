// INTERNAL IMPORTS
import CategoryLabel from "../ui/CategoryLabel";

const SuggestionsCategoryFilter = () => {
	const CATEGORY_DATA = ["all", "ui", "ux", "enhancement", "bug", "feature"];

	return (
		<div className="p-4 bg-white rounded-xl">
			{CATEGORY_DATA.map((item) => (
				<CategoryLabel category={item} key={item} />
			))}
		</div>
	);
};

export default SuggestionsCategoryFilter;
