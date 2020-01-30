import React, {useContext} from "react";
import {SelfExportModule} from "./SelfExportModule";
import {DeliveryChooseWrapper} from "./DeliveryChooseWrapper";
import {AdditionalInfo} from "./AdditionalInfo";
import {DeliveryPropertiesContext} from "../context/DeliveryProperiesProvider";

export const SelfExportTab = ({deliveryType, ...rest}) => {
  const [{deliveryType: cookieDeliveryType, selfExport}] = useContext(DeliveryPropertiesContext);
  const {showModule} = selfExport;
  const showAdditionalInfo = deliveryType === cookieDeliveryType;

  return (
    <>
      <DeliveryChooseWrapper deliveryType={deliveryType} {...rest}/>
      {
        showModule ?
          <SelfExportModule {...rest}/> :
          (showAdditionalInfo && <AdditionalInfo/>)
      }
    </>
  )
};