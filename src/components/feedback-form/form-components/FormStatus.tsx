// TYPES
import { FormField } from "../../../types/types";
// COMPONENTS
import FormSectionWrapper from "./FormSectionWrapper";
import FormLabel from "./FormLabel";

const FormStatus = ({ register, errors }: FormField) => {
	return (
		<FormSectionWrapper>
			<FormLabel
				htmlFor="status"
				label="Status"
				description="Change feedback status"
			/>
			<select
				{...register}
				name="status"
				id="status"
				className="p-3 rounded-md border outline-none bg-c-light-gray border-c-light-gray focus:border-c-light-blue">
				<option value="suggestion">Suggestion</option>
				<option value="planned">Planned</option>
				<option value="in-progress">In-progress</option>
				<option value="live">Live</option>
			</select>
			{errors.status && (
				<p className="text-sm text-c-red">{errors.status.message}</p>
			)}
		</FormSectionWrapper>
	);
};

export default FormStatus;
