const LoadingText = ({ text }: { text: string }) => {
	return (
		<p className="py-4 font-bold text-lg text-c-dark-gray animate-pulse text-center">
			{text}
		</p>
	);
};

export default LoadingText;
