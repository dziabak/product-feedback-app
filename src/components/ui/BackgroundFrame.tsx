const BackgroundFrame = ({
	children,
}: {
	children: JSX.Element | JSX.Element[];
}) => {
	return (
		<div className="p-4 bg-white rounded-[10px] dark:bg-c-dark-frame h-full">
			{children}
		</div>
	);
};

export default BackgroundFrame;
