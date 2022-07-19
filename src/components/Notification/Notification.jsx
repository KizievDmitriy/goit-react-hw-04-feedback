import { Component } from 'react';
import PropTypes from 'prop-types';
import { Paragraf } from './Notification.styled';
import SectionTitle from '../SectionTitle';

class Notification extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };

  render() {
    const { message } = this.props;
    return (
      <SectionTitle>
        <Paragraf>{message}</Paragraf>
      </SectionTitle>
    );
  }
}

export default Notification;
