import React, {useState} from "react";
import {PickupTab} from "./PickupTab";
import {SelfExportTab} from "./SelfexportTab";

export const TabsWrapper = ({onTabClick, deliveryType, ...rest}) => {
  const commonDeliveryProps = {
    pickup: {
      header: 'Офисы обслуживания',
      point: getCookie('deliveryAddress'),
      linkText: 'Выбрать другое место самовывоза',
      showModule: false,
    },
    selfExport: {
      header: 'Офисы самовывоза',
      point: getCookie('deliveryAddress'),
      linkText: 'Выбрать другой пункт выдачи',
      showModule: false,
    },
  };
  const [deliveryProps, setDeliveryProps] = useState(commonDeliveryProps[deliveryType]);
  const isPickup = deliveryType === 'pickup';
  const props = {
    deliveryProps,
    onPickAnotherPointClick: setDeliveryProps,
    deliveryType,
    ...rest
  };
  const tabClickHandler = (deliveryType) => {
    onTabClick(deliveryType);
    setDeliveryProps(commonDeliveryProps[deliveryType]);
  };
  const pickupClassName = `basket__progress-header-item basket__progress-header-item--without-before ${isPickup ? 'basket__progress-header-item--active': ''}`;
  const selfExportClassName = `basket__progress-header-item basket__progress-header-item--without-before ${isPickup ? '': 'basket__progress-header-item--active'}`;
  return (
    <>
      <ul className={'basket__tabs-wrapper'}>
        <li
          className={pickupClassName}
          onClick={() => tabClickHandler('pickup')}>Самовывоз</li>
        <li
          className={selfExportClassName}
          onClick={() => tabClickHandler('selfExport')}>Доставка</li>
      </ul>
      {
        isPickup ?
          <PickupTab {...props}/> :
          <SelfExportTab {...props}/>
      }
    </>
  )
};