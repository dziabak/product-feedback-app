// TYPES
import { FormField } from "../../../types/types";
// LIBRARIES
import clsx from "clsx";
// COMPONENTS
import FormSectionWrapper from "./FormSectionWrapper";
import FormLabel from "./FormLabel";

type FormDescriptionProps = FormField & { watch: any };

const FormDescription = ({ register, errors, watch }: FormDescriptionProps) => {
	const characterCountBaseValue = 500;
	let currentCharacterCount!: number;

	if (watch("description") !== undefined) {
		currentCharacterCount = watch("description").length;
	} else {
		currentCharacterCount = 0;
	}

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
				maxLength={characterCountBaseValue}
				className={clsx(
					"min-h-36 max-h-44 py-3 px-6 rounded-md bg-c-light-gray border border-c-light-gray outline-none focus:border-c-light-blue",
					errors.description &&
						"outline-none border border-c-red focus:border-transparent focus:ring focus:ring-c-red caret-c-red"
				)}
			/>
			{errors.description && (
				<p className="pb-2 text-sm text-c-red">{errors.description.message}</p>
			)}
			<p className="text-c-dark-gray">
				{characterCountBaseValue - currentCharacterCount} characters left
			</p>
		</FormSectionWrapper>
	);
};

export default FormDescription;
