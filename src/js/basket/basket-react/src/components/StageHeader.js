import React from "react";
import {StageHeaderItem} from "./StageHeaderItem";

export const StageHeader = ({header}) => {
  const statuses = ['Корзина', 'Способ доставки', 'Подтверждение заказа'];
  const stageHeaderItemRender = (currentPart) => statuses.map((descr, i) => {
    const innerWidth = window.innerWidth;
    const text = innerWidth > 450 ? descr : i + 1;
    const props = {
      text,
      className: currentPart === descr ? 'basket__progress-header-item basket__progress-header-item--active' : 'basket__progress-header-item',
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