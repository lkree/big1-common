import React from "react";
import {StageHeaderItem} from "./StageHeaderItem";

export const StageHeader = ({header}) => {
  const statuses = ['Корзина', 'Способ доставки', 'Подтверждение заказа'];
  const stageHeaderItemRender = (currentPart) => statuses.map((el, i, array) => {
    const length = array.length - 1;
      const props = {
        text: `${el}${length ===  i ? '' : ' -> '}`,
        className: currentPart === el ? 'basket__progress-header-item--active' : 'basket__progress-header-item',
      };
      return <StageHeaderItem key={i} {...props}/>
    });

  return (
    <ul className={'basket__progress-header'} style={{
      display: 'flex',
      'list-style-type': 'none'
    }}>
      {stageHeaderItemRender(header)}
    </ul>
  )
};