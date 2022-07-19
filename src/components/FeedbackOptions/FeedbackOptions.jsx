
import PropTypes from 'prop-types';
import SectionTitle from '..//SectionTitle';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <SectionTitle title="Please leave feedback">
      {options.map(({ name }) => (
        <Button key={name} name={name} type="button" onClick={onLeaveFeedback}>
          {name}
        </Button>
      ))}
    </SectionTitle>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
