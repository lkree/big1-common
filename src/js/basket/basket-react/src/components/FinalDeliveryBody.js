import React from "react";

export const FinalDeliveryBody = () => {
  const getDeliveryPoint = () => getCookie('deliveryAddress') || '';

  return (
    <div className="basket__react-final-delivery-body">
      <p className={'basket__react-final-delivery-address-text'}>Адрес:</p>
      <p className={'basket__react-final-delivery-address'}>{getDeliveryPoint()}</p>
    </div>
  )
};