import React, {useContext, useEffect} from "react";
import {DeliveryPropertiesContext} from "../context/DeliveryProperiesProvider";

export const DeliveryChooseWrapper = ({deliveryType, setNext, next}) => {
  const [props, updateProps] = useContext(DeliveryPropertiesContext);
  const currentProps = props[deliveryType];
  const {showModule, linkText} = currentProps;
  const onDeliveryChooseButtonClick = () => {
    setNext(false);
    updateProps({[deliveryType]: {
      ...currentProps,
      showModule: !showModule
    }});
  };

  useEffect(() => {updateProps()}, [next]);

  const renderPoint = () => (
      <div className={'basket__react-delivery-choose-point'}>
        Текущий пункт выдачи:&nbsp;
        <strong className={'basket__react-delivery-strong'}>{deliveryType === props.deliveryType ? props.deliveryAddress : 'не выбран'}</strong>
        </div>
  );
  return (
    <>
      {renderPoint()}
      <button
        onClick={onDeliveryChooseButtonClick}
        className={'basket__react-delivery-choose-pickAnotherPoint'}
      >{linkText}</button>
    </>
  )
};