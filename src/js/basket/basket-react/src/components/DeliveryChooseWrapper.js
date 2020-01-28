import React from "react";
import useCookie from "../hooks/useCookie";

export const DeliveryChooseWrapper = ({showPoint, deliveryProps, onPickAnotherPointClick, setButtonState}) => {
  const {header, linkText, showModule} = deliveryProps;
  const point = getCookie('deliveryAddress');
  const [, setCookie] = useCookie([]);
  const onDeliveryChooseButtonClick = () => {
    onPickAnotherPointClick({...deliveryProps, showModule: !showModule});
    !showModule && setCookie({
      deliveryType: '',
      deliveryAddress: '',
      deliveryCost: '',
      SelfExportPointId: '',
      deliveryDeadline: '',
    });

    setButtonState(false);
  };
  const renderPoint = () => (
    !showModule &&
      <div className={'basket__react-delivery-choose-point'}>
        Текущий пункт выдачи:&nbsp;
        <strong className={'basket__react-delivery-strong'}>{point && showPoint ? point : 'не выбран'}</strong>
        </div>
  );
  return (
    <>
      <header className={'basket__react-delivery-choose-header'}>{header}</header>
      {renderPoint()}
      <button
        onClick={onDeliveryChooseButtonClick}
        className={'basket__react-delivery-choose-pickAnotherPoint'}
      >{linkText}</button>
    </>
  )
};