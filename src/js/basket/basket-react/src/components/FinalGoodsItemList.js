import React from "react";
import {FinalGoodsItem} from "./FinalGoodsItem";

export const FinalGoodsItemList = () => {
  const renderItems = () => {
    const goods = window.basketApi.getBasketItems();
    return goods.map(product => <FinalGoodsItem {...product}/>);
  };

  return (
    <ul className="basket__react-final-goods-item-list">
      {renderItems()}
    </ul>
  )
};