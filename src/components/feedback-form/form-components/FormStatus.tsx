// TYPES
import { Controller, Control } from "react-hook-form";
// TYPES
import { TFeedbackFormSchema } from "../../../types/types";
// COMPONENTS
import FormSectionWrapper from "../ui/FormSectionWrapper";
import FormLabel from "./FormLabel";
import FormListbox from "./FormListbox";

const FormStatus = ({ control }: { control: Control<TFeedbackFormSchema> }) => {
	const statusData = ["suggestion", "planned", "in-progress", "live"];

	return (
		<FormSectionWrapper>
			<FormLabel
				htmlFor="status"
				label="Status"
				description="Change feedback status"
			/>
			<Controller
				name="status"
				control={control}
				render={({ field }) => (
					<FormListbox
						listboxData={statusData}
						selected={field.value}
						setSelected={field.onChange}
					/>
				)}
			/>
		</FormSectionWrapper>
	);
};

export default FormStatus;
