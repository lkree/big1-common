import React from "react";

export const BottomNavButton = ({text, available, ...rest}) => (
  <button {...rest} disabled={!available}>
    <span className={'basket__react-bottom-nav-btn-text'}>{text}</span>
    <span className={'basket__react-bottom-nav-btn-arrow'}/>
  </button>
);