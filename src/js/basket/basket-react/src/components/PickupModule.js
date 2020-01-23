import React, {useEffect} from "react";

export const PickupModule = ({className}) => {
  useEffect(() => {
    window.deliveryPickup()
  });
  return (
    <div className={`delivery-pickup ${className}`}
         data-delivery-type="Самовывоз">
      <input type="text"
             className="delivery-pickup__input"
             placeholder="Введите город"/>
      <div className="delivery-pickup__points-list"/>
    </div>
  )
};