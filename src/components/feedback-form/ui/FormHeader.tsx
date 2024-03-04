const FormHeader = ({ text }: { text: string }) => {
	return (
		<p
			className="pb-4 font-bold text-lg text-c-dark-blue tracking-tight md:text-2xl"
			style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
			>
			{text}
		</p>
	);
};

export default FormHeader;
