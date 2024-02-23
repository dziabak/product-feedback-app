// TYPES
import { Controller, Control } from "react-hook-form";
// TYPES
import { TFeedbackFormSchema } from "../../../types/types";
// COMPONENTS
import FormSectionWrapper from "./FormSectionWrapper";
import FormLabel from "./FormLabel";
import ListboxComponent from "./Listbox";

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
					<ListboxComponent
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
