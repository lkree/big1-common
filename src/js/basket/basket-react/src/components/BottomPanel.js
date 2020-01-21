import React from "react";
import {BottomNav} from './BottomNav';
import {BottomInfo} from "./BottomInfo";
import {BottomMessage} from "./BottomMessage";

export const BottomPanel = ({deliveryType, ...restProps}) => {
    return (
      <>
        <section className={'basket__react-bottom-panel'}>
          <BottomInfo deliveryType={deliveryType}/>
          <BottomNav {...restProps}/>
        </section>
        <BottomMessage/>
      </>
    )
};