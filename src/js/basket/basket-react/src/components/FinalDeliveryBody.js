import React from "react";
import {FinalDeliveryDeadLines} from "./FinalDeliveryDeadLines";

export const FinalDeliveryBody = () => {
  const getDeliveryPoint = () => getCookie('deliveryAddress') || '';
  const getDeliveryPriceMessage = () => {
    const deliveryCost = getCookie('deliveryCost') || 0;

    return `${deliveryCost} р.`;
  };

  return (
      <div className="basket__react-final-delivery-body">
        <div className="basket__react-final-delivery-address-wrapper">
          <p className={'basket__react-final-delivery-address-text'}>Адрес:</p>
          <p className={'basket__react-final-delivery-address'}>{getDeliveryPoint()}</p>
        </div>
        <FinalDeliveryDeadLines/>
        <div className="basket__react-final-delivery-price-wrapper">
          <p className={'basket__react-final-delivery-price-text'}>Стоимость:</p>
          <p className={'basket__react-final-delivery-price'}>{getDeliveryPriceMessage()}</p>
        </div>
      </div>
  )
};