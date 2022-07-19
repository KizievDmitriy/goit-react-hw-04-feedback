
import PropTypes from 'prop-types';
import { Paragraf } from './Notification.styled';
import SectionTitle from '../SectionTitle';

const Notification = ({ message }) => {
  return (
    <SectionTitle>
      <Paragraf>{message}</Paragraf>
    </SectionTitle>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;