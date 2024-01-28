// INTERNAL IMPORTS
import CategoryLabel from "../ui/CategoryLabel";

const SuggestionsCategoryFilter = () => {
	const CATEGORY_DATA = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

	return (
		<div className="p-4 bg-white rounded-xl">
			{CATEGORY_DATA.map((item) => (
				<CategoryLabel category={item} key={item} />
			))}
		</div>
	);
};

export default SuggestionsCategoryFilter;
