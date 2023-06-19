import { useState, useEffect } from "react";
import Section from "./components/Section";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);

  const countTotalFeedback = (g, n, b) => g + n + b;
  const countPositiveFeedbackPercentage = (g, t) => {
    let percentage = Math.floor((100 * g) / t);

    if (isNaN(percentage)) {
      return 0;
    } else {
      return percentage;
    }
  };

  useEffect(() => {
    setTotal(countTotalFeedback(good, neutral, bad));
    setPositive(countPositiveFeedbackPercentage(good, total));
  }, [good, neutral, bad, total]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontSize: 40,
        color: "#010101",
      }}
    >
      <Section title={"Please leave feedback"}>
        <FeedbackOptions value={good} setValue={setGood} buttonName={"Good"} />
        <FeedbackOptions
          value={neutral}
          setValue={setNeutral}
          buttonName={"Neutral"}
        />
        <FeedbackOptions value={bad} setValue={setBad} buttonName={"Bad"} />
      </Section>

      <Section title={"Statistics"}>
        <Statistics g={good} n={neutral} b={bad} t={total} p={positive} />
      </Section>
    </div>
  );
};

export default App;
