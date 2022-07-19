import { Component } from 'react';
import PropTypes from 'prop-types';
import { Paragraf } from './Statistics.styled';
import SectionTitle from '../SectionTitle';

class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.func.isRequired,
  };
  render() {
    const { good, neutral, bad, total = 0, positivePercentage } = this.props;

    return (
      <SectionTitle title="Statistics">
        <Paragraf>Good: {good}</Paragraf>
        <Paragraf>Neutral: {neutral}</Paragraf>
        <Paragraf>Bad: {bad}</Paragraf>
        <Paragraf>Total: {total}</Paragraf>
        <Paragraf>
          Positive feedback: {total ? positivePercentage(good, total) : 0}
        </Paragraf>
      </SectionTitle>
    );
  }
}

export default Statistics;
