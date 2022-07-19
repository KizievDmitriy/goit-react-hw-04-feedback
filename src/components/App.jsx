import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hundleIncrement = option => {
    this.setState(preState => ({ [option]: preState[option] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
      return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (a, b) => {
    return Math.round((a / b) * 100) + '%';
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.hundleIncrement}
        />
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}
