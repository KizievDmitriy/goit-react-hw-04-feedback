import { useState, useEffect } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

export function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0);
    const [positivePercentage, setPositivePercentage] = useState(0);
  
  useEffect(() => {
        setTotal([good, neutral, bad].reduce((acc, value) => acc + value, 0));
    }, [good, neutral, bad]);

    useEffect(() => {
        setPositivePercentage(Math.round((good / total) * 100)+ '%');
    }, [good, total]); 
  
   const onLeaveFeedback = feedback => {
        switch (feedback) {
            case 'good':
                setGood(good => good + 1);
                break;

            case 'neutral':
                setNeutral(neutral => neutral + 1);
                break;

            case 'bad':
                setBad(bad => bad + 1);
                break;

            default:
                return;
        }
    };


    return (
      <>
        <FeedbackOptions
          options={Object.keys({good, bad, neutral})}
          onLeaveFeedback={onLeaveFeedback}
        />
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  
}