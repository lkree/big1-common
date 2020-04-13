import React from "react";
import {PickupTab} from "./PickupTab";
import {SelfExportTab} from "./SelfexportTab";

export const TabsWrapper = ({onTabClick, deliveryType, ...rest}) => {
  const isPickup = deliveryType === 'pickup';
  const props = {
    deliveryType,
    ...rest
  };
  const pickupClassName = `basket__progress-header-item basket__progress-header-item--without-before ${isPickup && 'basket__progress-header-item--active'}`;
  const selfExportClassName = `basket__progress-header-item basket__progress-header-item--without-before ${!isPickup && 'basket__progress-header-item--active'}`;
  return (
    <>
      <ul className={'basket__tabs-wrapper'}>
        <li
          className={pickupClassName}
          onClick={() => onTabClick('pickup')}>Самовывоз</li>
        <li
          className={selfExportClassName}
          onClick={() => onTabClick('selfExport')}>Доставка</li>
      </ul>
      {isPickup ?
          <PickupTab {...props}/> :
          <SelfExportTab {...props}/>}
    </>
  )
};