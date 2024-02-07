const BackgroundFrame = ({
	children,
}: {
	children: JSX.Element | JSX.Element[];
}) => {
	return (
		<div className="p-4 bg-white rounded-xl dark:bg-c-dark-frame">
			{children}
		</div>
	);
};

export default BackgroundFrame;
