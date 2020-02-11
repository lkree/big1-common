import React from "react";
import {FinalDeliveryDeadLines} from "./FinalDeliveryDeadLines";

export const FinalDeliveryBody = () => {
  const getDeliveryPoint = () => getCookie('deliveryAddress') || '';

  return (
      <div className="basket__react-final-delivery-body">
        <div className="basket__react-final-delivery-address-wrapper">
          <p className={'basket__react-final-delivery-address'}>{getDeliveryPoint()}</p>
        </div>
        <FinalDeliveryDeadLines/>
      </div>
  )
};