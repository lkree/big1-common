import React, {useState} from "react";
import {PickupTab} from "./PickupTab";
import {SelfExportTab} from "./SelfexportTab";

export const TabsWrapper = ({onTabClick, deliveryType}) => {
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
  };
  const tabClickHandler = (deliveryType) => {
    onTabClick(deliveryType);
    setDeliveryProps(commonDeliveryProps[deliveryType]);
  };
  return (
    <>
      <ul>
        <li
          className={isPickup ? 'basket__react-tab-active': ''}
          onClick={() => tabClickHandler('pickup')}>Самовывоз</li>
        <li
          className={isPickup ? '': 'basket__react-tab-active'}
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