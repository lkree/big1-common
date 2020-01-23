import React from "react";

export const FinalGoodsItem = ({name, date, count, price, link}) => (
  <li className="basket__react-final-goods-item">
    <a href={link} className="basket__react-final-goods-item-link">
      <p className="basket__react-final-goods-item-name">{name}</p>
    </a>
    <p className="basket__react-final-goods-item-date">{date}</p>
    <p className="basket__react-final-goods-item-count">{count} шт.</p>
    <p className="basket__react-final-goods-item-price">{price * count} р.</p>
  </li>
);