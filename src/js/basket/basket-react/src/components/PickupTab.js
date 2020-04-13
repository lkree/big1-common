import React, {useContext} from "react";
import {PickupModule} from "./PickupModule";
import {DeliveryChooseWrapper} from "./DeliveryChooseWrapper";
import {AdditionalInfo} from "./AdditionalInfo";
import {DeliveryPropertiesContext} from "../context/DeliveryProperiesProvider";

export const PickupTab = ({deliveryType, ...rest}) => {
  const [{deliveryType: cookieDeliveryType, pickup}] = useContext(DeliveryPropertiesContext);
  const {showModule} = pickup;
  const showAdditionalInfo = deliveryType === cookieDeliveryType;

  return (
    <>
      <DeliveryChooseWrapper deliveryType={deliveryType} {...rest}/>
      {showModule ?
          <PickupModule {...rest}/> :
          (showAdditionalInfo && <AdditionalInfo/>)}
    </>
)};