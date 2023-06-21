import React, { useState } from "react";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";
import Notification from "./components/Notification";

const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const incrementCount = (category) => {
    setState((prevState) => ({
      ...prevState,
      [category]: prevState[category] + 1,
    }));
  };

  const resetCounts = () => {
    setState({ good: 0, neutral: 0, bad: 0 });
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    const totalFeedback = countTotalFeedback();
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  };

  const feedbackOptions = ["good", "neutral", "bad"];
  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <h1>Review App</h1>
      <Section title="Leave Feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={incrementCount}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
      <button onClick={resetCounts}>Reset Counts</button>
    </div>
  );
};

export default App;
