import React from "react";
import {TabsWrapper} from "./TabsWrapper";
import {Header} from "./Header";

export const SecondScreen = ({header, ...rest}) => (
  <>
    <Header header={header}/>
    <TabsWrapper {...rest}/>
  </>
);