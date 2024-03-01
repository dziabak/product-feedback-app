type ErrorBlockProps = {
	errorHeader: string;
	errorMessage: string;
	small?: boolean;
	full?: boolean;
};

const ErrorBlock = ({
	small,
	full,
	errorHeader,
	errorMessage,
}: ErrorBlockProps) => {
	if (full) {
		return (
			<div className="flex flex-col justify-center items-center h-screen space-y-1 font-main font-bold">
				<p className="text-2xl text-c-dark-blue">{errorHeader}</p>
				<p className="font-thin text-c-dark-blue/70">{errorMessage}</p>
			</div>
		);
	} else if (small) {
		return (
			<div className="font-main font-bold text-center">
				<p className="text-lg text-c-red">{errorHeader}</p>
				<p className="font-thin text-sm text-c-red/70">{errorMessage}</p>
			</div>
		);
	} else {
		return (
			<div className="space-y-1 font-main font-bold text-center">
				<p className="text-2xl text-c-dark-blue">{errorHeader}</p>
				<p className="font-thin text-c-dark-blue/70">{errorMessage}</p>
			</div>
		);
	}
};

export default ErrorBlock;
