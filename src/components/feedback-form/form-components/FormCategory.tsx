// LIBRARIES
import { Controller, Control } from "react-hook-form";
// TYPES
import { TFeedbackFormSchema } from "../../../types/types";
// COMPONENTS
import FormSectionWrapper from "./FormSectionWrapper";
import FormLabel from "./FormLabel";
import ListboxComponent from "./Listbox";

const FormCategory = ({
	control,
}: {
	control: Control<TFeedbackFormSchema>;
}) => {
	const categoryData = ["feature", "ui", "ux", "enhancement", "bug"];

	return (
		<FormSectionWrapper>
			<FormLabel
				htmlFor="category"
				label="Category"
				description="Choose a category for your feedback"
			/>
			<Controller
				name="category"
				control={control}
				render={({ field }) => (
					<ListboxComponent
						listboxData={categoryData}
						selected={field.value}
						setSelected={field.onChange}
					/>
				)}
			/>
		</FormSectionWrapper>
	);
};

export default FormCategory;
