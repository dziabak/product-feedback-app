// COMPONENTS
import FormSectionWrapper from "./FormSectionWrapper";
import FormLabel from "./FormLabel";

const FormDescription = ({ defaultValue }: { defaultValue?: any }) => {
	return (
		<FormSectionWrapper>
			<FormLabel
				htmlFor="description"
				label="Feedback Details"
				description="Include any specific comments on what should be improved, added,
					etc."
			/>
			<textarea
				name="description"
				id="description"
				className="p-3 rounded-md bg-c-light-gray"
				defaultValue={defaultValue}
			/>
		</FormSectionWrapper>
	);
};

export default FormDescription;
