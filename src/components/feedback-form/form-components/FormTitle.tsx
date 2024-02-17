// COMPONENTS
import FormSectionWrapper from "./FormSectionWrapper";
import FormLabel from "./FormLabel";

const FormTitle = ({ defaultValue }: { defaultValue?: any }) => {
	return (
		<FormSectionWrapper>
			<>
				<FormLabel
					htmlFor="title"
					label="Feedback Title"
					description="Add a short, descriptive headline"
				/>
				<input
					type="text"
					name="title"
					id="title"
					className="p-3 rounded-md bg-c-light-gray"
					defaultValue={defaultValue}
				/>
			</>
		</FormSectionWrapper>
	);
};

export default FormTitle;
