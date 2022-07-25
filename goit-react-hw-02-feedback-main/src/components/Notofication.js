import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Fancy = styled.span({
  fontWeight: 600,
});

function Notification({ message }) {
  return <Fancy>{message}</Fancy>;
}

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
