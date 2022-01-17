import React, { useState } from "react";

const Button = ({ handleChoice, text }) => (
  <button onClick={handleChoice}>{text}</button>
);

const StatLine = (props) => (
  <>
  <table>
    <tbody>
    <tr>
      <td> {props.text}</td>
      <td>{props.result}</td>
    </tr>
    </tbody>
    
  </table>
    
  </>
);

const Statistics = ({
  good,
  neutral,
  bad,
  result,
  All,
  Average,
  Percentage,
}) => {
  if (!result.good && !result.bad && !result.neutral) {
    return <h1>No feedback</h1>;
  }
  return (
    <>
      <StatLine text={good} result={result.good} />
      <StatLine text={neutral} result={result.neutral} />
      <StatLine text={bad} result={result.bad} />

      <br />

      <StatLine text={All} result={result.good + result.bad + result.neutral} />
      <StatLine
        text={Average}
        result={(result.good + result.bad + result.neutral) / 3}
      />
      <StatLine
        text={Percentage}
        result={
          (result.good / (result.good + result.bad + result.neutral)) * 100
        }
      />
    </>
  );
};

const App = () => {
  const [review, setReview] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleGood = () => {
    const newReview = {
      ...review,
      good: review.good + 1,
    };

    setReview(newReview);
  };

  const handleNeutral = () => {
    const newReview = {
      ...review,
      neutral: review.neutral + 1,
    };

    setReview(newReview);
  };

  const handleBad = () => {
    const newReview = {
      ...review,
      bad: review.bad + 1,
    };

    setReview(newReview);
  };

  return (
    <div>
      <h1>Give FeedBack</h1>
      <Button handleChoice={handleGood} text="good" />
      <Button handleChoice={handleNeutral} text="neutral" />
      <Button handleChoice={handleBad} text="bad" />

      <h1>Statistics</h1>

      <Statistics
        good="good"
        bad="bad"
        neutral="neutral"
        All="All"
        Average="Average"
        Percentage="Percentage"
        result={review}
      />
    </div>
  );
};

export default App;
