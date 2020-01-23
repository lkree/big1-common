import React from "react";
import {BottomNav} from './BottomNav';
import {BottomInfo} from "./BottomInfo";
import {BottomMessage} from "./BottomMessage";

export const BottomPanel = ({...restProps}) => (
  <>
    <section className={'basket__react-bottom-panel'}>
      <BottomInfo/>
      <BottomNav {...restProps}/>
    </section>
    <BottomMessage/>
  </>
);