import React from "react";
import {FinalGoodsItem} from "./FinalGoodsItem";

export const FinalGoodsItemList = () => {
  const goods = window.basketApi.getBasketItems();

  return (
    <ul className="basket__react-final-goods-item-list">
      {goods.map(product => <FinalGoodsItem {...product}/>)}
    </ul>
  )
};