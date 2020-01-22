import React from "react";

export const FinalGoodsItem = ({name, date, count, price, link}) => (
  <li className="basket__react-final-goods-item">
    <a href={link}><p>{name}</p></a>
    <p>{date}</p>
    <p>{count} шт.</p>
    <p>{price * count} р.</p>
  </li>
);