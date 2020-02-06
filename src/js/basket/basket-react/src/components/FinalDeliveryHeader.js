import React from "react";

export const FinalDeliveryHeader = () => {
  const getDeliveryTypeMessage = () => {
    const deliveryType = getCookie('deliveryType');

    return deliveryType === 'pickup' ? 'Самовывоз' : 'Пункт выдачи';
  };

  return (
    <header className="basket__react-final-delivery-header">
      {getDeliveryTypeMessage()}
    </header>
  )
};