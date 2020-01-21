import React from "react";

export const DeliveryChooseWrapper = ({showPoint, deliveryProps, onPickAnotherPointClick}) => {
  const {header, linkText, showModule} = deliveryProps;
  const point = getCookie('deliveryAddress');
  const renderPoint = (showPoint) => (
    showPoint && !showModule ?
      <div className={'basket__react-delivery-choose-point'}>{point}</div> : ''
  );
  return (
    <>
      <header className={'basket__react-delivery-choose-header'}>{header}</header>
      {renderPoint(showPoint)}
      <button
        onClick={() => onPickAnotherPointClick({...deliveryProps, showModule: !showModule})}
        className={'basket__react-delivery-choose-pickAnotherPoint'}
      >{linkText}</button>
    </>
  )
};