import React from "react";

export const BottomInfo = () => {
  const renderInfoItem = () => {
    const totalPriceData = window.basketApi.getTotalPricesAndItems();
    const itemData = [
        {
          text: totalPriceData.split(':')[0],
          value: totalPriceData.split(':')[1],
          className: 'basket__react-bottom-info-item basket__react-bottom-info-item--products',
        },
        {
          text: 'Стоимость доставки',
          value: `${window.basketApi.getDeliveryPrice()} р`, /* need to initialize variable (contacts and over delivery types, then synchronize*/
          className: 'basket__react-bottom-info-item basket__react-bottom-info-item--delivery',
        }
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

  return (
    <div className={'basket__react-bottom-info'}>
      {renderInfoItem()}
    </div>
  )
};