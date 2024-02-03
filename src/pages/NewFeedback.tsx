import FeedbackFormHeader from "../components/feedback-form/FeedbackFormHeader";
import NewFeedbackForm from "../components/feedback-form/NewFeedbackForm";

const NewFeedback = () => {
	return (
		<section className="container">
			<FeedbackFormHeader />
			<NewFeedbackForm />
		</section>
	);
};

export default NewFeedback;
