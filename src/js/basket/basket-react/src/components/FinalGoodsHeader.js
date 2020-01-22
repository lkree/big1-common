import React from "react";

export const FinalGoodsHeader = () => {
  const positionsNumber = window.basketApi.getPositionsNumber();
  const totalSum = window.basketApi.getTotalSum();
  const getPositionsMessage = (positions) => {
    switch(true) {
      case positions.toString().slice(-1) === '1': return `${positions} позиция`;
      case +positions.toString().slice(-1) > 1 && +positions.toString().slice(-1) < 5: return `${positions} позиции`;
      default: return `${positions} позиций`;
    }
  };

  return (
    <header className="basket__react-final-goods-header">
      <p>{getPositionsMessage(positionsNumber)}</p>
      <p>К оплате {totalSum} р.</p>
    </header>
  )
};