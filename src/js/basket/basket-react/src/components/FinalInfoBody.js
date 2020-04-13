import React from "react";
import {FinalGoods} from "./FinalGoods";
import {FinalDelivery} from "./FinalDelivery";

export const FinalInfoBody = () => (
  <div className="basket__react-final-body">
    <FinalGoods/>
    <FinalDelivery/>
  </div>
);