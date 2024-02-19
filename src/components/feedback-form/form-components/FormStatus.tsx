// COMPONENTS
import FormSectionWrapper from "./FormSectionWrapper";
import FormLabel from "./FormLabel";

const FormStatus = ({ defaultValue }: { defaultValue?: any }) => {
	return (
		<FormSectionWrapper>
			<FormLabel
				htmlFor="status"
				label="Status"
				description="Change feedback status"
			/>
			<select
				name="status"
				id="status"
				defaultValue={defaultValue}
				className="p-3 rounded-md bg-c-light-gray">
				<option value="suggestion">Suggestion</option>
				<option value="planned">Planned</option>
				<option value="in-progress">In-progress</option>
				<option value="live">Live</option>
			</select>
		</FormSectionWrapper>
	);
};

export default FormStatus;
