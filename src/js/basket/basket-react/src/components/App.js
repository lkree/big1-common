import React, {useState} from "react";

import {SecondScreen} from "./SecondScreen";
import {ThirdScreen} from "./ThirdScreen";
import {BottomPanel} from "./BottomPanel";
import {StageHeader} from "./StageHeader";
import DeliveryPropertiesProvider from "../context/DeliveryProperiesProvider";
import DeliveryStatusProvider from "../context/DeliveryStatusContext";
import useCookie from "../hooks/useCookie";

export const App = () => {
  const headers = {
    2: 'Способ доставки',
    3: 'Подтверждение заказа',
  };
  const [next, setNext] = useState(false);
  const [{deliveryType: initialState}] = useCookie('deliveryType');
  const [deliveryType, setDeliveryType] = useState(initialState || 'pickup');
  const [step, setStep] = useState(2);
  const onNavButtonClick = (operation, step) => {
    const newStep = operation === 'add' ? step + 1 : step - 1;
    if (newStep < 4 && newStep > 1) return newStep;
    return step;
  };
  const currentScreen = (
      step === 2 ?
        <SecondScreen
          header={headers[step]}
          onTabClick={(payload) => setDeliveryType(payload)}
          deliveryType={deliveryType}
          next={next}
          setNext={setNext}
        /> :
        <ThirdScreen/>
    );
  return (
    <DeliveryPropertiesProvider>
      <DeliveryStatusProvider>
        <StageHeader
          header={headers[step]}
          onClick={payload => setStep(step => onNavButtonClick(payload, step))}
        />
        {currentScreen}
        <BottomPanel
          onClick={payload => setStep(step => onNavButtonClick(payload, step))}
          step={step} next={next}
        />
      </DeliveryStatusProvider>
    </DeliveryPropertiesProvider>
  )
};