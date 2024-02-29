const FormLabel = ({
	htmlFor,
	label,
	description,
}: {
	htmlFor?: string;
	label: string;
	description: string;
}) => {
	return (
		<label htmlFor={htmlFor}>
			<p className="text-sm font-bold text-c-dark-blue">{label}</p>
			<p className="text-sm text-c-dark-gray">
				{description}
			</p>
		</label>
	);
};

export default FormLabel;
