import React, {useContext, useEffect} from "react";
import ModuleNextButton from "./ModuleNextButton";
import {DeliveryPropertiesContext} from "../context/DeliveryProperiesProvider";
import {DeliveryStatusContext} from "../context/DeliveryStatusContext";

export const PickupModule = ({className, next, setNext}) => {
  const [, updateStatus] = useContext(DeliveryStatusContext);
  const [{pickup}, updateData] = useContext(DeliveryPropertiesContext);

  const onListClick = ({target}) => {
    updateStatus();
    updateData();
    target.classList.contains('delivery-pickup__point--active') ?
      setNext(true) :
      setNext(false);
  };
  const onNextButtonClick = () => {
    const {showModule} = pickup;
    updateData({
      pickup: {
        ...pickup,
        showModule: !showModule
      }
    });
  };

  useEffect(() => {
    window.deliveryPickup();
  }, []);
  return (
    <div className={`delivery-pickup ${className || ''}`}
         data-delivery-type="Самовывоз">
      <input type="text"
             className="delivery-pickup__input"
             placeholder="Введите город"/>
      <header className={'delivery-pickup__points-header'}>{pickup.header}</header>
      <div className="delivery-pickup__points-list" onClick={onListClick}/>
      {next && <ModuleNextButton onClick={onNextButtonClick} className={'delivery-pickup__continue-btn'}/>}
    </div>
  )
};