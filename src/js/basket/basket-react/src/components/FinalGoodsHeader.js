import React from "react";

export const FinalGoodsHeader = () => {
  const positionsNumber = parseInt(window.basketApi.getTotalPricesAndItems().replace('Итого ', '')); //temporary
  const totalSum = window.basketApi.getItemsPrice();
  const getPositionsMessage = (positions) => {
    switch(true) {
      case positions.toString().slice(-1) === '1': return `${positions} позиция`;
      case +positions.toString().slice(-1) > 1 && +positions.toString().slice(-1) < 5: return `${positions} позиции`;
      default: return `${positions} позиций`;
    }
  };

  return (
    <header className="basket__react-final-goods-header">
      <p className="basket__react-final-goods-header-positions">{getPositionsMessage(positionsNumber)}</p>
      <p className="basket__react-final-goods-header-price">На сумму {totalSum} р.</p>
    </header>
  )
};