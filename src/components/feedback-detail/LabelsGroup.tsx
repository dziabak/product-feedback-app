// TYPES
import { ProductRequestsData } from "../../types/types";
// COMPONENTS
import StatusLabel from "./StatusLabel";
import AuthorLabel from "./AuthorLabel";

const LabelsGroup = ({
	data,
}: {
	data: ProductRequestsData | undefined;
}) => {
	let content!: JSX.Element;

	if (data) {
		content = (
			<div className="flex justify-between items-end px-1 py-4 md:px-8">
				<StatusLabel data={data} />
				<AuthorLabel data={data} />
			</div>
		);
	}

	return <>{content}</>;
};

export default LabelsGroup;
