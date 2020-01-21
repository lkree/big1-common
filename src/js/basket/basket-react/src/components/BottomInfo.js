import React from "react";

export const BottomInfo = ({deliveryType}) => {
  const renderInfoItem = () => {
    const totalPriceData = window.basketApi.getTotalPricesAndItems();
    const itemData = [
        {
          text: totalPriceData.split(':')[0],
          value: totalPriceData.split(':')[1],
        },
        {
          text: 'Стоимость доставки',
          value: `${deliveryType === 'pickup' ? 0 : 350} р`, /* need to initialize variable (contacts and over delivery types, then synchronize*/
        }
      ];

    return itemData.map(({text, value}, i) => <div key={i} className={'basket__react-bottom-info-item'}>{text}: <span className={'basket__react-bottom-info-item-mark'}>{value}</span></div>);
  };

  return (
    <div className={'basket__react-bottom-info'}>
      {renderInfoItem()}
    </div>
  )
};