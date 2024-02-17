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
			<div className="flex justify-between px-8 py-4 ">
				<StatusLabel data={data} />
				<AuthorLabel data={data} />
			</div>
		);
	}

	return <>{content}</>;
};

export default LabelsGroup;
