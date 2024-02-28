const CategoryLabel = ({ category }: { category: string }) => {
	return (
		<button className="px-3 py-2 m-1 text-xs font-semibold transition-colors rounded-[10px] bg-c-gray text-c-light-blue hover:bg-c-light-blue hover:text-white">
			{category}
		</button>
	);
};

export default CategoryLabel;
