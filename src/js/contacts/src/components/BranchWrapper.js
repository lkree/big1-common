import React from "react";
import {Branch} from "./Branch";

export const BranchWrapper = ({branches, onClick, mapLink, onBranchClick, city}) => {
  const renderBranch = (branches) => (
    branches.map(({name, street, schedule, photos, id}) => {
      const props = {
        name: name,
        street: street,
        schedule: schedule,
        photos: photos,
        key: name,
        onClick: onBranchClick,
        id: id,
        city: city,
      };
      return <Branch {...props}/>
    })
  );
  return (
    <>
      <button onClick={onClick} className={'contacts__back-button'}>Назад</button>
      {branches.office &&
        <>
          <header className={'contacts__branches-wrapper-header'}>Офисы обслуживания BIG1.RU</header>
          <ul className={'contacts__branches-wrapper'}>
            {renderBranch(branches.office)}
          </ul>
        </>}
      {branches.points &&
        <>
          <header className={'contacts__branches-wrapper-header'}>Пункты самовывоза BIG1.RU</header>
          <ul className={'contacts__branches-wrapper'}>
            {renderBranch(branches.points)}
          </ul>
        </>}
      <iframe src={mapLink}
              width="100%"
              height="360"
              frameBorder="0"/>
    </>
  )
};