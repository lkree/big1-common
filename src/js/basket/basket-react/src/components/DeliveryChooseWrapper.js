import React, {useContext} from "react";
import {DeliveryStatusContext} from "../context/DeliveryStatusContext";
import {DeliveryPropertiesContext} from "../context/DeliveryProperiesProvider";

export const DeliveryChooseWrapper = ({deliveryType, setNext}) => {
  const [props, updateProps] = useContext(DeliveryPropertiesContext);
  const currentProps = props[deliveryType];
  const {showModule, header, linkText} = currentProps;
  const [, getStatus] = useContext(DeliveryStatusContext);
  const {deliveryAddress} = props;
  const onDeliveryChooseButtonClick = () => {
    setNext(false);
    getStatus();
    updateProps({[deliveryType]: {
      ...currentProps,
      showModule: !showModule
    }});
  };

  const renderPoint = () => (
      <div className={'basket__react-delivery-choose-point'}>
        Текущий пункт выдачи:&nbsp;
        <strong className={'basket__react-delivery-strong'}>{deliveryType === props.deliveryType ? deliveryAddress : 'не выбран'}</strong>
        </div>
  );
  return (
    <>
      <header className={'basket__react-delivery-choose-header'}>{header}</header>
      {!showModule && renderPoint()}
      <button
        onClick={onDeliveryChooseButtonClick}
        className={'basket__react-delivery-choose-pickAnotherPoint'}
      >{linkText}</button>
    </>
  )
};