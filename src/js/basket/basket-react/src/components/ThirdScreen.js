import React from "react";
import {StageHeader} from "./StageHeader";
import {Header} from "./Header";
import {FinalInfo} from "./FinalInfo";

export const ThirdScreen = ({header}) => (
  <>
    <StageHeader header={header}/>
    <Header header={header}/>
    <FinalInfo/>
  </>
);