import React, {useContext} from 'react';
import {CommonDataContext} from "../context/CommonData";
import getUrl from "../helpers/getUrl";
import Toggle from "./Toggle";

const Header = () => {
  const dataKey = getUrl();
  const {[dataKey]: data} = useContext(CommonDataContext);

  return (
    <>
      <div className={'car-logo'}>
        <img src={data.logo.src}
             alt="car-logo"/>
      </div>
      {data.toggle && <Toggle/>}
    </>
  )
};

export default Header;