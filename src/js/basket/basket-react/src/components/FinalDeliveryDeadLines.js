import React from "react";

export const FinalDeliveryDeadLines = () => {
  const deadline = window.basketApi.getMaxDeliveryDate();

  return (
    <div className={'basket__react-final-delivery-deadline'}>
      <p className={'basket__react-final-delivery-deadline-text'}>Срок доставки</p>
      <p className={'basket__react-final-delivery-deadline-days'}>{deadline} дн.</p>
    </div>
  )
};