import React from "react";

export const DeliveryChooseWrapper = ({showPoint, deliveryProps, onPickAnotherPointClick, buttonAvailable, setButtonState, step}) => {
  const {header, linkText, showModule} = deliveryProps;
  const point = getCookie('deliveryAddress');
  const onDeliveryChooseButtonClick = () => {
    onPickAnotherPointClick({...deliveryProps, showModule: !showModule});

    const checkState = () => {
      const isCookieOk = [getCookie('deliveryAddress'), getCookie('deliveryDeadline'), getCookie('deliveryCost'), getCookie('deliveryType')].every(el => !!el);

      setButtonState({
        available: isCookieOk
      });
    };
    checkState();
  };
  const renderPoint = (showPoint) => (
    showPoint && !showModule ?
      <div className={'basket__react-delivery-choose-point'}>{point}</div> : ''
  );
  return (
    <>
      <header className={'basket__react-delivery-choose-header'}>{header}</header>
      {renderPoint(showPoint)}
      <button
        onClick={onDeliveryChooseButtonClick}
        className={'basket__react-delivery-choose-pickAnotherPoint'}
      >{linkText}</button>
    </>
  )
};