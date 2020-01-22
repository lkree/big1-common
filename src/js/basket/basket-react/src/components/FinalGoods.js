import React from "react";
import {FinalGoodsItemList} from "./FinalGoodsItemList";
import {FinalGoodsHeader} from "./FinalGoodsHeader";

export const FinalGoods = () => (
  <div className="basket__react-final-goods">
    <FinalGoodsHeader/>
    <FinalGoodsItemList/>
  </div>
);