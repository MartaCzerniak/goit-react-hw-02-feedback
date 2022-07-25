import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Fancy = styled.button({
  border: '1px',
  boxShadow: '7px 6px 24px -9px rgba(66, 68, 90, 1)',
  fontSize: 14,
  fontWeight: 600,
  padding: 6,
  borderRadius: 5,
  cursor: 'pointer',
  '&:hover': { backgroundColor: 'blue', color: 'white' },
});

function Button({ label, changeValue }) {
  return (
    <Fancy type="button" onClick={changeValue}>
      {label}
    </Fancy>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  changeValue: PropTypes.func,
};

export default Button;
