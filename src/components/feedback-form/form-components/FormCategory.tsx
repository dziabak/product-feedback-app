// TYPES
import { FormField } from "../../../types/types";
// COMPONENTS
import FormSectionWrapper from "./FormSectionWrapper";
import FormLabel from "./FormLabel";

const FormCategory = ({ register, errors }: FormField) => {
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
				className="p-3 rounded-md border outline-none bg-c-light-gray border-c-light-gray focus:border-c-light-blue">
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
