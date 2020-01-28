import React from "react";
import {SelfExportModule} from "./SelfExportModule";
import {DeliveryChooseWrapper} from "./DeliveryChooseWrapper";
import {AdditionalInfo} from "./AdditionalInfo";

export const SelfExportTab = ({deliveryType, ...rest}) => {
  const {deliveryProps: {showModule}} = rest;
  const showAdditionalInfo = deliveryType === getCookie('deliveryType');

  return (
    <>
      <DeliveryChooseWrapper showPoint={showAdditionalInfo} {...rest}/>
      {
        showModule ?
          <SelfExportModule {...rest}/> :
          (showAdditionalInfo && <AdditionalInfo/>)
      }
    </>
  )
};