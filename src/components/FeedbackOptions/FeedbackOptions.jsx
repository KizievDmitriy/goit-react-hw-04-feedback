import { Component } from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '..//SectionTitle';
import { Button } from './FeedbackOptions.styled';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <SectionTitle title="Please leave feedback">
        {options.map(option => (
          <Button
            key={[option]}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </Button>
        ))}
      </SectionTitle>
    );
  }
}

export default FeedbackOptions;
