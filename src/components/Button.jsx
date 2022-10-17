/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PropTypes from "prop-types";

function Button({ label, changeValue }) {
  return (
    <button
      css={css`
        border: 1px;
        box-shadow: 7px 6px 24px -9px rgba(66, 68, 90, 1);
        font-size: 14px;
        font-weight: 600;
        margin: 5px;
        padding: 10px;
        border-radius: 5%;
        cursor: pointer;
        &:hover {
          background-color: blue;
          color: white;
        }
      `}
      type="button"
      onClick={changeValue}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  changeValue: PropTypes.func,
};

export default Button;
