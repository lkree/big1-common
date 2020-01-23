import React from "react";

export const StageHeaderItem = ({text, className, onClick}) => (
  <li onClick={onClick} className={className.join(' ')}>{text}</li>
);