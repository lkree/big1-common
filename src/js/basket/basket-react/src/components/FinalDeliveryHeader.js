import React, {useContext} from "react";
import {DeliveryPropertiesContext} from "../context/DeliveryProperiesProvider";

export const FinalDeliveryHeader = () => {
  const getDeliveryPriceMessage = () => {
    const deliveryCost = getCookie('deliveryCost') || 0;

    return `${deliveryCost} р.`;
  };
  const [{deliveryType}] = useContext(DeliveryPropertiesContext);

  return (
    <header className="basket__react-final-delivery-header">
      <p className={'basket__react-final-delivery-price-text'}>
        {deliveryType === 'pickup' ? 'Самовывоз' : 'Доставка'}
      </p>
      <p className={'basket__react-final-delivery-price'}>{getDeliveryPriceMessage()}</p>
    </header>
  )
};