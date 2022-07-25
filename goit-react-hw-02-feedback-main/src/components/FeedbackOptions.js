import Button from './Button';
import { nanoid } from 'nanoid';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Fancy = styled.div({
  display: 'flex',
  columnGap: 5,
});

function FeedbackOptions({ options, onLeaveFeedback }) {
  let buttons = options.map(option => (
    <Button key={nanoid()} label={option} changeValue={() => onLeaveFeedback(option)} />
  ));

  return <Fancy>{buttons}</Fancy>;
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
