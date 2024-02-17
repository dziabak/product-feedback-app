// TYPES
import { ProductRequestsData } from "../../types/types";

const AuthorLabel = ({ data }: { data: ProductRequestsData | undefined }) => {
	let content!: JSX.Element;

	if (data) {
		content = (
			<p className="px-8 py-4 text-right text-sm text-c-dark-gray">
				by{" "}
				<span className="font-bold text-c-dark-blue">
					{data[0].author.name}
				</span>{" "}
				({data[0].author.username})
			</p>
		);
	}

	return <>{content}</>;
};

export default AuthorLabel;
