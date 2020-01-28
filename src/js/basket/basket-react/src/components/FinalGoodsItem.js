import React from "react";

export const FinalGoodsItem = ({name, date, count, price, link}) => {
  const [fromDate, toDate] = window.basketApi.getDeliveryItemDeadline(date);
  return (
    <li className="basket__react-final-goods-item">
      <a href={link} className="basket__react-final-goods-item-link">
        <p className="basket__react-final-goods-item-name">{name}</p>
      </a>
      <p className="basket__react-final-goods-item-date">{`${fromDate}${toDate ? ' - ' + toDate : ''}` + ' дн.'}</p>
      <p className="basket__react-final-goods-item-count">{count} шт.</p>
      <p className="basket__react-final-goods-item-price">{price * count} р.</p>
    </li>
  )
};