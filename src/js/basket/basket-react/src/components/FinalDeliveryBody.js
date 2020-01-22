import React from "react";

export const FinalDeliveryBody = () => {
  const getDeliveryPoint = () => getCookie('deliveryAddress') || '';

  return (
    <div className="basket__react-final-delivery-body">
      <p>Адрес:</p>
      <p>{getDeliveryPoint()}</p>
    </div>
  )
};