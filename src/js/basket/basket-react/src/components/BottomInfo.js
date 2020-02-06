import React, {useEffect} from "react";
import useCookie from "../hooks/useCookie";

export const BottomInfo = (next) => {
  const [{deliveryCost}, updateData] = useCookie(['deliveryCost']);
  const renderInfoItem = () => {
    const totalPriceData = window.basketApi.getTotalPricesAndItems();
    const deliveryDeadline = deliveryCost ? `${deliveryCost} р` : 'не выбран пункт выдачи';
    const commonCost = window.basketApi.getTotalSum();
    const itemData = [
        {
          text: totalPriceData.split(':')[0],
          value: totalPriceData.split(':')[1],
          className: 'basket__react-bottom-info-item basket__react-bottom-info-item--products',
        },
        {
          text: 'Стоимость доставки',
          value: deliveryDeadline, /* need to initialize variable (contacts and over delivery types, then synchronize*/
          className: 'basket__react-bottom-info-item basket__react-bottom-info-item--delivery',
        },
        {
          text: 'Итого',
          value: ` ${commonCost} р.`, /* need to initialize variable (contacts and over delivery types, then synchronize*/
          className: 'basket__react-bottom-info-item basket__react-bottom-info-item--common',
        },
      ];

    return itemData.map(({text, value, className}, i) => (
      <div key={i} className={className}>
          {text}:&nbsp;
        <span className={'basket__react-bottom-info-item-mark'}>
          {value}
        </span>
      </div>
      )
    );
  };

  useEffect(() => updateData(), [next]);

  return (
    <div className={'basket__react-bottom-info'}>
      {renderInfoItem()}
    </div>
  )
};