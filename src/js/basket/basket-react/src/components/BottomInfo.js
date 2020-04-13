import React, {useEffect} from "react";
import useCookie from "../hooks/useCookie";

export const BottomInfo = ({next, step}) => {
  const [{deliveryCost}, updateData] = useCookie(['deliveryCost']);
  const renderInfoItem = () => {
    const totalPriceData = window.basketApi.getTotalPricesAndItems();
    const deliveryDeadline = deliveryCost ? `${deliveryCost} р` : 'не выбран пункт выдачи';
    const itemData = [
        {
          text: totalPriceData.split(':')[0],
          value: totalPriceData.split(':')[1],
          className: 'basket__react-bottom-info-item basket__react-bottom-info-item--products',
          step: [2],
        },
        {
          text: 'Стоимость доставки',
          value: deliveryDeadline, /* need to initialize variable (contacts and over delivery types, then synchronize*/
          className: 'basket__react-bottom-info-item basket__react-bottom-info-item--delivery',
          step: [2],
        },
        {
          text: 'Сумма к оплате',
          value: ` ${window.basketApi.getTotalSum().toLocaleString()} р.`, /* need to initialize variable (contacts and over delivery types, then synchronize*/
          className: 'basket__react-bottom-info-item basket__react-bottom-info-item--common',
          step: [3],
        },
      ];

    return itemData.filter(e => e.step.includes(step)).map(({text, value, className}, i) => (
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