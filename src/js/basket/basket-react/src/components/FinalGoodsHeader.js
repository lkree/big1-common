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
      target.classList.add('basket__react-final-goods-open-button--open');
    }
    else {
      $(wrapper).slideUp();
      target.classList.remove('basket__react-final-goods-open-button--open');
    }
  };

  return (
    <header className="basket__react-final-goods-header">
      <p className="basket__react-final-goods-header-positions">
        {getPositionsMessage(positionsNumber)}
        <button className={'basket__react-final-goods-open-button'} onClick={onHandleButtonClick}>Открыть</button>
      </p>
      <p className="basket__react-final-goods-header-price">{totalSum} р.</p>
    </header>
  )
};