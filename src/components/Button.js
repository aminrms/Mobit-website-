import React from "react";

const Button = () => {
  return (
    <button onClick={() => dispatch({ type: "add-item", payload: product })}>
      افزودن به سبد خرید
    </button>
  );
};

export default Button;
