import React from "react";
import {StageHeader} from "./StageHeader";
import {TabsWrapper} from "./TabsWrapper";
import {Header} from "./Header";

export const SecondScreen = ({header, onTabClick, deliveryType}) => (
  <>
    <StageHeader header={header}/>
    <Header header={header}/>
    <main>
      <TabsWrapper onTabClick={onTabClick} deliveryType={deliveryType}/>
    </main>
  </>
);