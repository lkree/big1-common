import React from "react";
import {FinalGoods} from "./FinalGoods";
import {FinalDelivery} from "./FinalDelivery";
import {FinalDeliveryDeadLines} from "./FinalDeliveryDeadLines";

export const FinalInfoBody = () => (
  <div className="basket__react-final-body">
    <FinalGoods/>
    <FinalDelivery/>
    <FinalDeliveryDeadLines/>
  </div>
);