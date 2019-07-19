import React from "react";

export const OperatorButton = (props) => {
  return (
    <button>
      {props.operatorKey.char}
    </button>
  );
};
