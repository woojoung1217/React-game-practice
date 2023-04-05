import React from "react";

const Try = ({ TryInfo }) => {
  return (
    <li>
      <div>{TryInfo.try}</div>
      <div>{TryInfo.result}</div>
    </li>
  );
};
