import React from "react";

const Button = ({
  text = "Example",
  isSelected,
  color = "primary",
  size = "",
  isModalTrigger = false,
  onclick,
}) => {
  return (
    <div>
      <button
        type="button"
        data-bs-toggle={`${isModalTrigger ? "modal" : ""}`}
        className={`btn ${
          isSelected ? `btn-${color}` : `btn-${color}`
        } ${size}`}
        data-bs-target={`${isModalTrigger ? "#staticBackdrop" : ""}`}
        onClick={onclick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
