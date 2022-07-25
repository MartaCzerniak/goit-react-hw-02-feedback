import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notofication';
import styled from '@emotion/styled';

const labels = ['Good', 'Neutral', 'Bad'];

const Fancy = styled.div({
  textAlign: 'left',
});

class FeedbackStats extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = label => {
    const { good, neutral, bad } = this.state;
    label === 'Good' && this.setState({ good: good + 1 });
    label === 'Neutral' && this.setState({ neutral: neutral + 1 });
    label === 'Bad' && this.setState({ bad: bad + 1 });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let total = this.countTotalFeedback();
    return (good * 100) / total;
  };

  render() {
    let total = this.countTotalFeedback();
    let positive = this.countPositiveFeedbackPercentage();

    return total === 0 ? (
      <div>
        <Fancy>
          <Section title="Please leave feedback" />
          <FeedbackOptions options={labels} onLeaveFeedback={this.handleClick} />
          <Section title="Statistics" />
          <Notification message="There is no feedback" />
        </Fancy>
      </div>
    ) : (
      <div>
        <Fancy>
          <Section title="Please leave feedback" />
          <FeedbackOptions options={labels} onLeaveFeedback={this.handleClick} />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positive}
          ></Statistics>
        </Fancy>
      </div>
    );
  }
}

export default FeedbackStats;
