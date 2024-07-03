import React from "react";
import ListGroup from "./ListGroup";

interface Props {
  onClick: () => void;
}
const Button = ({ onClick }: Props) => {
  return (
    <>
      <button className="btn btn-primary" onClick={onClick}>
        select
      </button>
    </>
  );
};

export default Button;
