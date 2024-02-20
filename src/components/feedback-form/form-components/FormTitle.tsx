// LIBRARIES
import clsx from "clsx";
// COMPONENTS
import FormSectionWrapper from "./FormSectionWrapper";
import FormLabel from "./FormLabel";

const FormTitle = ({ register, errors }: { register: any; errors: any }) => {
	return (
		<FormSectionWrapper>
			<FormLabel
				htmlFor="title"
				label="Feedback Title"
				description="Add a short, descriptive headline"
			/>
			<input
				{...register}
				type="text"
				name="title"
				id="title"
				className={clsx(
					"p-3 rounded-md bg-c-light-gray border border-c-light-gray outline-none focus:border-c-light-blue",
					errors.title &&
						"outline-none border border-c-red focus:border-transparent focus:ring focus:ring-c-red caret-c-red"
				)}
			/>
			{errors.title && (
				<p className="text-sm text-c-red">{errors.title.message}</p>
			)}
		</FormSectionWrapper>
	);
};

export default FormTitle;
