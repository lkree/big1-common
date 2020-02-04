import React, {useContext} from "react";
import {StageHeaderItem} from "./StageHeaderItem";
import {DeliveryStatusContext} from "../context/DeliveryStatusContext";

export const StageHeader = ({header, onClick, ...rest}) => {
  const statuses = ['Корзина', 'Способ доставки', 'Подтверждение заказа'];
  const [status] = useContext(DeliveryStatusContext);
  const stageHeaderItemRender = (currentPart) => statuses.map((descr, i) => {
    const getClassName = () => {
      const classNames = ['basket__progress-header-item'];

      if (currentPart === descr)
        classNames.push('basket__progress-header-item--active');

      return classNames;
    };
    const getOnClick = (index) => {
      if (index === 0) return window.basketApi.returnToBasket;
      if (index === 1) return onClick.bind(null, 'sub');
      if (index === 2) return status ? onClick.bind(null, 'add') : () => {};
    };
    const innerWidth = window.innerWidth;
    const text = innerWidth > 450 ? descr : i + 1;
    const props = {
      ...rest,
      text,
      className: getClassName(),
      onClick: getOnClick(i),
    };
    return <StageHeaderItem key={i} {...props}/>
  });

  return (
    <ul className={'basket__progress-header'}>
      {stageHeaderItemRender(header)}
    </ul>
  )
};