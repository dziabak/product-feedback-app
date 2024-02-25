// TYPES
import { ProductRequestsData } from "../../../types/types";
// HELPERS
import { countTotalComments, generateRandomId } from "../../../utils/helpers";
// COMPONENTS
import CommentComponent from "./CommentComponent";

const CommentSection = ({
	data,
	id,
}: {
	data: ProductRequestsData | undefined;
	id: string | undefined;
}) => {
	let content!: JSX.Element;

	if (data) {
		const totalComments = countTotalComments(data[0].comments);

		content = (
			<div className="mt-6 md:mt-4">
				<div className="flex flex-col p-8 rounded-lg bg-white">
					<p className="mb-8 text-lg font-bold text-c-dark-blue">
						{totalComments} Comments
					</p>
					{data[0].comments === undefined && (
						<p className="mb-8 text-center text-c-dark-gray">
							Be the first to comment!
						</p>
					)}
					{data[0].comments !== undefined &&
						data[0].comments.map((item) => (
							<CommentComponent
								key={generateRandomId()}
								content={item.content}
								image={item.user.image}
								name={item.user.name}
								username={item.user.username}
								replyData={item.replies}
								commentId={item.id}
								postId={id}
							/>
						))}
				</div>
			</div>
		);
	}

	return <>{content}</>;
};

export default CommentSection;
