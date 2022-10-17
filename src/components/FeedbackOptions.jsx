/** @jsxImportSource @emotion/react */
import Button from "./Button";
import { nanoid } from "nanoid";
import { css } from "@emotion/react";
import PropTypes from "prop-types";

function FeedbackOptions({ options, onLeaveFeedback }) {
  let buttons = options.map((option) => (
    <Button
      key={nanoid()}
      label={option}
      changeValue={() => onLeaveFeedback(option)}
    />
  ));

  return (
    <div
      css={css`
        display: flex;
        column-gap: 5px;
      `}
    >
      {buttons}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
