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
      <div className="delivery-pickup__chosen-city-wrapper">
        <p className="delivery-pickup__chosen-city-descr">Текущий
          город:&nbsp;</p>
        <p className="delivery-pickup__chosen-city"/>
        <button className="delivery-pickup__change-city">Выбрать другой
          город
        </button>
      </div>
      <input type="text"
             className="delivery-pickup__input"
             placeholder="Введите улицу"/>
      <header className={'delivery-pickup__points-header'}>{pickup.officeHeader}</header>
      <div className="delivery-pickup__points-list" onClick={onListClick}/>
      {next && <ModuleNextButton onClick={onNextButtonClick} className={'delivery-pickup__continue-btn'}/>}
    </div>
  )
};