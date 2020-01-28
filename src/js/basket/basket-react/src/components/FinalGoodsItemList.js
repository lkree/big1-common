import React, {useRef} from "react";
import {FinalGoodsItem} from "./FinalGoodsItem";

export const FinalGoodsItemList = () => {
  const goods = window.basketApi.getBasketItems();
  const wrapper = useRef(null);

  const onHandleButtonClick = ({target}) => {
    const {current: {style: {display}}} = wrapper;
    if (display === 'none' || !display) {
      $(wrapper.current).slideDown();
      target.textContent = 'Закрыть';
    }
    else {
      $(wrapper.current).slideUp();
      target.textContent = 'Открыть';
    }
  };

  return (
    <>
      <ul className="basket__react-final-goods-item-list" ref={wrapper}>
        {goods.map(product => <FinalGoodsItem {...product}/>)}
      </ul>
      <button onClick={onHandleButtonClick}>Открыть</button>
    </>
  )
};