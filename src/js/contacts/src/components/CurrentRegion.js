import React from "react";

export const CurrentRegion = ({currentCity}) => (
  <header className={'contacts__current-region'}>
    <span className={'contacts__current-region-title'}>Ваш город: </span>
    <span className={'contacts__current-region-city'}>{currentCity}</span>
  </header>
);