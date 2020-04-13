import React from "react";

export const CitiesList = ({renderCity}) => (
  <ul className={'contacts__city-list'}>
    {renderCity()}
  </ul>
);
