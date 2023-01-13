import React from "react";

const Hello = (props) => {
  const onClick = () => {
    props.onHelloClick(2);
  };

  return <p onClick={onClick}>I am the {"<Hello />"}</p>;
};

export default Hello;
