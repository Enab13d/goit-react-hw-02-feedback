import { StatsItem, StatsValue, FeedbackStats } from "../Statistics/Statistics.styled";

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <FeedbackStats>
        <StatsItem>
          <StatsValue>Good: {good}</StatsValue>
        </StatsItem>
        <StatsItem>
          <StatsValue>Neutral: {neutral}</StatsValue>
        </StatsItem>
        <StatsItem>
          <StatsValue>Bad: {bad}</StatsValue>
        </StatsItem>
        <StatsItem>
          <StatsValue>Total: {total}</StatsValue>
        </StatsItem>
        <StatsItem>
          <StatsValue>PositiveFeedback: {positivePercentage} %</StatsValue>
        </StatsItem>
      </FeedbackStats>
    )



}