import React from "react";

export const FinalDeliveryHeader = () => {
  const getDeliveryTypeMessage = () => {
    const deliveryType = getCookie('deliveryType');

    return deliveryType === 'pickup' ? 'Самовывоз' : 'Пункт выдачи';
  };
  const getDeliveryPriceMessage = () => {
    const deliveryCost = getCookie('deliveryCost') || 0;

    return `${deliveryCost} р.`;
  };

  return (
    <header className="basket__react-final-delivery-header">
      <p>{getDeliveryTypeMessage()}</p>
      <p>{getDeliveryPriceMessage()}</p>
    </header>
  )
};