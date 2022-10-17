/** @jsxImportSource @emotion/react */
import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Statistics from "./Statistics";
import Notification from "./Notification";
import { css } from "@emotion/react";

const labels = ["Good", "Neutral", "Bad"];

class FeedbackStats extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (label) => {
    const { good, neutral, bad } = this.state;
    label === "Good" && this.setState({ good: good + 1 });
    label === "Neutral" && this.setState({ neutral: neutral + 1 });
    label === "Bad" && this.setState({ bad: bad + 1 });
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
        <div
          css={css`
            text-align: left;
          `}
        >
          <Section title="Please leave feedback" />
          <FeedbackOptions
            options={labels}
            onLeaveFeedback={this.handleClick}
          />
          <Section title="Statistics" />
          <Notification message="There is no feedback" />
        </div>
      </div>
    ) : (
      <div>
        <div
          css={css`
            text-align: left;
          `}
        >
          <Section title="Please leave feedback" />
          <FeedbackOptions
            options={labels}
            onLeaveFeedback={this.handleClick}
          />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positive}
          ></Statistics>
        </div>
      </div>
    );
  }
}

export default FeedbackStats;
