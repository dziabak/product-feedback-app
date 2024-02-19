// COMPONENTS
import FormSectionWrapper from "./FormSectionWrapper";
import FormLabel from "./FormLabel";

const FormCategory = ({ defaultValue }: { defaultValue?: any }) => {
	return (
		<FormSectionWrapper>
			<FormLabel
				htmlFor="category"
				label="Category"
				description="Choose a category for your feedback"
			/>
			<select
				name="category"
				id="category"
				defaultValue={defaultValue}
				className="p-3 rounded-md bg-c-light-gray">
				<option value="feature">Feature</option>
				<option value="ui">UI</option>
				<option value="ux">UX</option>
				<option value="enhancement">Enhancement</option>
				<option value="bug">Bug</option>
			</select>
		</FormSectionWrapper>
	);
};

export default FormCategory;
