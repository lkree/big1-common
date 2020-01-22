import React from "react";
import {StageHeader} from "./StageHeader";
import {TabsWrapper} from "./TabsWrapper";
import {Header} from "./Header";

export const SecondScreen = ({header, ...rest}) => (
  <>
    <StageHeader header={header}/>
    <Header header={header}/>
    <main>
      <TabsWrapper {...rest}/>
    </main>
  </>
);