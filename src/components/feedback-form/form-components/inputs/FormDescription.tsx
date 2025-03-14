// LIBRARIES
import { UseFormWatch } from "react-hook-form";
import clsx from "clsx";
// TYPES
import { FormField, TFeedbackFormSchema } from "../../../../types/types";
// COMPONENTS
import FormSectionWrapper from "../../ui/FormSectionWrapper";
import FormLabel from "../FormLabel";

type FormDescriptionProps = FormField & {
	watch: UseFormWatch<TFeedbackFormSchema>;
};

const FormDescription = ({ register, errors, watch }: FormDescriptionProps) => {
	const characterCountBaseValue = 500;
	let currentCharacterCount!: number;

	if (watch("description") !== undefined) {
		currentCharacterCount = watch("description").length;
	} else {
		currentCharacterCount = 0;
	}

	let remainingCharacters = characterCountBaseValue - currentCharacterCount;

	return (
		<FormSectionWrapper>
			<FormLabel
				htmlFor="description"
				label="Feedback Details"
				description="Include any specific comments on what should be improved, added,
					etc."
			/>
			<textarea
				data-cy="feedback-form-description-input"
				{...register}
				name="description"
				id="description"
				maxLength={characterCountBaseValue}
				className={clsx(
					"min-h-36 max-h-44 p-6 rounded-[10px] text-sm bg-c-light-gray outline-none border border-c-light-gray focus:border-c-light-blue md:text-base",
					!errors.description && "caret-c-light-blue",
					errors.description &&
						"outline-none border border-c-red focus:border-c-red caret-c-red"
				)}
			/>
			{errors.description && (
				<p className="pb-2 text-sm text-c-red">{errors.description.message}</p>
			)}
			<p className="pt-4 text-sm text-c-dark-gray md:text-base">
				{remainingCharacters} characters left
			</p>
		</FormSectionWrapper>
	);
};

export default FormDescription;
