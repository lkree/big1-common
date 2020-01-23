import React from "react";

export const AdditionalInfoItem = ({text, className}) => (
  <div
    className={'basket__react-additional-info-item basket__react-additional-info-item--' + className}
  >{text}</div>
);