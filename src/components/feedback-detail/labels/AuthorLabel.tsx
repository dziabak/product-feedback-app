// TYPES
import { ProductRequestsData } from "../../../types/types";

const AuthorLabel = ({ data }: { data: ProductRequestsData | undefined }) => {
	let content!: JSX.Element;

	if (data) {
		content = (
			<p className="text-right text-xs text-c-dark-gray md:text-sm">
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
