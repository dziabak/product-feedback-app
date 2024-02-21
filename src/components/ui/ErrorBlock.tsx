type ErrorBlockProps = {
	errorHeader: string;
	errorMessage: string;
	small?: boolean;
};

const ErrorBlock = ({ small, errorHeader, errorMessage }: ErrorBlockProps) => {
	return small ? (
		<div className="font-main font-bold text-center">
			<p className="text-lg text-c-red">{errorHeader}</p>
			<p className="font-thin text-sm text-c-red/70">{errorMessage}</p>
		</div>
	) : (
		<div className="space-y-1 font-main font-bold text-center">
			<p className="text-2xl text-c-dark-blue">{errorHeader}</p>
			<p className="font-thin text-c-dark-blue/70">{errorMessage}</p>
		</div>
	);
};

export default ErrorBlock;
