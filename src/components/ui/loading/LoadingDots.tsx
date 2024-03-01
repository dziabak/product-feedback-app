const LoadingDots = () => {
	return (
		<div className="flex justify-center items-center h-screen space-x-2">
			<span className="sr-only">Loading...</span>
			<div className="h-8 w-8 bg-c-dark-blue/75 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
			<div className="h-8 w-8 bg-c-dark-blue/75 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
			<div className="h-8 w-8 bg-c-dark-blue/75 rounded-full animate-bounce"></div>
		</div>
	);
};

export default LoadingDots;
