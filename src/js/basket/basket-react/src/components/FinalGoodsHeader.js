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
  const onHandleButtonClick = ({target}) => {
    const wrapper = document.querySelector('.basket__react-final-goods-item-list');
    const {style: {display}} = wrapper;
    if (display === 'none' || !display) {
      $(wrapper).slideDown();
      target.textContent = 'Закрыть';
    }
    else {
      $(wrapper).slideUp();
      target.textContent = 'Открыть';
    }
  };

  return (
    <header className="basket__react-final-goods-header">
      <p className="basket__react-final-goods-header-positions">
        {getPositionsMessage(positionsNumber)}
        <button onClick={onHandleButtonClick}>Открыть</button>
      </p>
      <p className="basket__react-final-goods-header-price">На сумму {totalSum} р.</p>
    </header>
  )
};