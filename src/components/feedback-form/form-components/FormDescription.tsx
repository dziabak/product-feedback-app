// TYPES
import { FormField } from "../../../types/types";
// LIBRARIES
import clsx from "clsx";
// COMPONENTS
import FormSectionWrapper from "./FormSectionWrapper";
import FormLabel from "./FormLabel";

const FormDescription = ({ register, errors }: FormField) => {
	return (
		<FormSectionWrapper>
			<FormLabel
				htmlFor="description"
				label="Feedback Details"
				description="Include any specific comments on what should be improved, added,
					etc."
			/>
			<textarea
				{...register}
				name="description"
				id="description"
				className={clsx(
					"p-3 rounded-md bg-c-light-gray border border-c-light-gray outline-none focus:border-c-light-blue",
					errors.description &&
						"outline-none border border-c-red focus:border-transparent focus:ring focus:ring-c-red caret-c-red"
				)}
			/>
			{errors.description && (
				<p className="text-sm text-c-red">{errors.description.message}</p>
			)}
		</FormSectionWrapper>
	);
};

export default FormDescription;
