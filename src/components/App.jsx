import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const hundleIncrement = e => {
    const fieldName = e.target.name;

    switch (fieldName) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = (a, b) => {
    return Math.round((a / b) * 100) + '%';
  };

  const buttonFieldName = [
    {
      name: 'good',
    },
    {
      name: 'neutral',
    },
    {
      name: 'bad',
    },
  ];

  return (
    <>
      <FeedbackOptions
        options={buttonFieldName}
        onLeaveFeedback={hundleIncrement}
      />
      {countTotalFeedback() > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};