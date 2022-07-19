import PropTypes from 'prop-types';
import { Section, Title } from './SectionTitle.styled';

const SectionTitle = ({ children, title }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      {children}
    </Section>
  );
};
export default SectionTitle;

SectionTitle.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
