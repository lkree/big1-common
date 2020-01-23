import React from "react";

export const FinalSum = () => {
  const finalSum = window.basketApi.getTotalSum();
  return (
    <div className={'basket__react-final-sum'}>
      <div className={'basket__react-final-message'}>Итого:</div>
      <div className={'basket__react-final-price'}>{finalSum} р.</div>
    </div>
  )
};