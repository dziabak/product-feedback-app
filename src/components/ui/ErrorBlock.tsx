type ErrorBlockProps = {
	errorHeader: string;
	errorMessage: string;
};

const ErrorBlock = ({ errorHeader, errorMessage }: ErrorBlockProps) => {
	return (
		<div className="space-y-1 font-main font-bold text-center">
			<p className="text-2xl text-c-dark-blue">{errorHeader}</p>
			<p className="font-thin text-c-dark-blue/70">{errorMessage}</p>
		</div>
	);
};

export default ErrorBlock;
