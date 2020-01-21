import React from "react";
import {CityButton} from "./CityButton";

export const City = ({kladr_id, firstLetter, renderBranch, onClick, branches, ...rest}) => (
  <li key={kladr_id} className={'contacts__item'}>
    {
      firstLetter ?
        <div className={'contacts__item-first-letter'}>{firstLetter}</div> :
        undefined
    }
    {
      branches ?
        <CityButton {...rest} kladr_id={kladr_id} branches={branches} onClick={renderBranch}/> :
        <CityButton {...rest} kladr_id={kladr_id} branches={branches} onClick={onClick}/>
    }
  </li>
);