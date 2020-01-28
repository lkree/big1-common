import React, {useEffect, useState} from "react";
import ModuleNextButton from "./ModuleNextButton";

export const PickupModule = ({className, setButtonState, onPickAnotherPointClick, deliveryProps}) => {
  const [next, setNext] = useState(false);
  const onListClick = ({target}) => {
    target.classList.contains('delivery-pickup__point--active') ?
      setNext(true) :
      setNext(false);
  };
  const onNextButtonClick = () => {
    setButtonState(true);
    const {showModule} = deliveryProps;
    onPickAnotherPointClick({...deliveryProps, showModule: !showModule});
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
      <div className="delivery-pickup__points-list" onClick={onListClick}/>
      {next && <ModuleNextButton onClick={onNextButtonClick}/>}
    </div>
  )
};