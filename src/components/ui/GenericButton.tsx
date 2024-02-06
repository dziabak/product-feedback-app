const GenericButton = ({ text, color }: { text: string; color: string }) => {
	return (
		<button
			className={`px-6 py-3 text-sm font-bold transition-colors rounded-lg bg-c-${color} text-white hover:bg-c-${color}/75`}>
			{text}
		</button>
	);
};

export default GenericButton;
