// TYPES
import { FormField } from "../../../../types/types";
// LIBRARIES
import clsx from "clsx";
// COMPONENTS
import FormSectionWrapper from "../../ui/FormSectionWrapper";
import FormLabel from "../FormLabel";

const FormTitle = ({ register, errors }: FormField) => {
	return (
		<FormSectionWrapper>
			<FormLabel
				htmlFor="title"
				label="Feedback Title"
				description="Add a short, descriptive headline"
			/>
			<input
				data-cy="feedback-form-title-input"
				{...register}
				type="text"
				name="title"
				id="title"
				maxLength={50}
				className={clsx(
					"py-3 px-6 rounded-[10px] text-sm bg-c-light-gray outline-none border border-c-light-gray focus:border-c-light-blue md:text-base",
					!errors.title && "caret-c-light-blue",
					errors.title &&
						"outline-none border border-c-red focus:border-c-red caret-c-red"
				)}
			/>
			{errors.title && (
				<p className="text-sm text-c-red">{errors.title.message}</p>
			)}
		</FormSectionWrapper>
	);
};

export default FormTitle;
