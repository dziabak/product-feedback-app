// LIBRARIES
import { Controller, Control } from "react-hook-form";
// TYPES
import { TFeedbackFormSchema } from "../../../../types/types";
// COMPONENTS
import FormSectionWrapper from "../../ui/FormSectionWrapper";
import FormLabel from "../FormLabel";
import FormListbox from "../FormListbox";

const FormCategory = ({
	control,
}: {
	control: Control<TFeedbackFormSchema>;
}) => {
	const categoryData = ["feature", "ui", "ux", "enhancement", "bug"];

	return (
		<FormSectionWrapper>
			<Controller
				name="category"
				control={control}
				render={({ field }) => (
					<FormListbox
						cy="feedback-form-category-list"
						type="category"
						label={
							<FormLabel
								label="Category"
								description="Choose a category for your feedback"
							/>
						}
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
