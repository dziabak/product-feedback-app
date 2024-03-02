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
		<label htmlFor={htmlFor} className="mb-1">
			<p className="text-sm font-bold text-c-dark-blue tracking-tight">{label}</p>
			<p className="text-sm text-c-dark-gray">
				{description}
			</p>
		</label>
	);
};

export default FormLabel;
