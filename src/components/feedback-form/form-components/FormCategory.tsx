// COMPONENTS
import FormSectionWrapper from "./FormSectionWrapper";
import FormLabel from "./FormLabel";

const FormCategory = ({ register, errors }: { register: any; errors: any }) => {
	return (
		<FormSectionWrapper>
			<FormLabel
				htmlFor="category"
				label="Category"
				description="Choose a category for your feedback"
			/>
			<select
				{...register}
				name="category"
				id="category"
				className="p-3 rounded-md bg-c-light-gray border border-c-light-gray outline-none focus:border-c-light-blue">
				<option value="feature">Feature</option>
				<option value="ui">UI</option>
				<option value="ux">UX</option>
				<option value="enhancement">Enhancement</option>
				<option value="bug">Bug</option>
			</select>
			{errors.category && (
				<p className="text-sm text-c-red">{errors.category.message}</p>
			)}
		</FormSectionWrapper>
	);
};

export default FormCategory;
