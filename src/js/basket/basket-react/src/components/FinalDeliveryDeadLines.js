import React from "react";

export const FinalDeliveryDeadLines = () => {
  const deadline = window.basketApi.getMaxDeliveryDate();

  return (
    <div className={'basket__react-final-delivery-deadline'}>
      <p>Срок доставки</p>
      <p>{deadline} дн.</p>
    </div>
  )
};