import React from "react";
import {PickupModule} from "./PickupModule";
import {DeliveryChooseWrapper} from "./DeliveryChooseWrapper";
import {AdditionalInfo} from "./AdditionalInfo";

export const PickupTab = ({deliveryType, ...rest}) => {
  const {deliveryProps: {showModule}} = rest;
  const showAdditionalInfo = deliveryType === getCookie('deliveryType');

  return (
    <>
      <DeliveryChooseWrapper showPoint={showAdditionalInfo} {...rest}/>
      {
        showModule ?
          <PickupModule {...rest}/> :
          (showAdditionalInfo ? <AdditionalInfo/> : '')
      }
    </>
)};