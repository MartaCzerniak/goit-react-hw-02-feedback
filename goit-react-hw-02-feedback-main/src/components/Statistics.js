import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Fancy = styled.div({
  fontWeight: 600,
});

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <Fancy>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{total}</p>
      <p>Positive feedback:{Math.round(positivePercentage)}%</p>
    </Fancy>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
