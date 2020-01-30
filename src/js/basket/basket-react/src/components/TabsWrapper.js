import React, {useContext, useState} from "react";
import {PickupTab} from "./PickupTab";
import {SelfExportTab} from "./SelfexportTab";
import useCookie from "../hooks/useCookie";
import {DeliveryPropertiesContext} from "../context/DeliveryProperiesProvider";

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