import React from "react";

export const CityButton = ({branches, mapLink, kladr_id, name, onClick}) => {
    const className = branches ? 'contacts__city-button contacts__city-button--branch' : 'contacts__city-button';
    const setParams = (evt, name) => branches ?
      {
        branches: branches,
        mapLink: mapLink,
        city: name,
      } :
      {
        evt: evt,
        kladr_id: kladr_id,
      };

    return (
      <>
        <button className={className} onClick={(evt) => onClick(setParams(evt, name))}>{name}</button>
      </>
    )
};