
import PropTypes from 'prop-types';
import { Paragraf } from './Statistics.styled';
import SectionTitle from '../SectionTitle';

const Statistics = ({ good, neutral, bad, total = 0, positivePercentage }) => {
  return (
    <SectionTitle title="Statistics">
      <Paragraf>Good: {good}</Paragraf>
      <Paragraf>Neutral: {neutral}</Paragraf>
      <Paragraf>Bad: {bad}</Paragraf>
      <Paragraf>Total: {total}</Paragraf>
      <Paragraf>
        PositivePercentage: {total ? positivePercentage(good, total) : 0}
      </Paragraf>
    </SectionTitle>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;