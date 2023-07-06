import { Experience, Feedback } from "../FeedbackOptions/FeedbackOptions.styled";
export const FeedbackOptions = ({onLeaveFeedback}) => {
    return (
          <form>
            <Experience name="Experience" onClick={onLeaveFeedback} multiple>
              <Feedback value="good">Good</Feedback>
              <Feedback value="neutral">Neutral</Feedback>
              <Feedback value="bad">Bad</Feedback>
            </Experience>
          </form>
    )
}