/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PropTypes from "prop-types";

function Notification({ message }) {
  return (
    <span
      css={css`
        font-weight: 600;
      `}
    >
      {message}
    </span>
  );
}

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
