import React, {useState, useEffect} from "react";

import {SecondScreen} from "./SecondScreen";
import {ThirdScreen} from "./ThirdScreen";
import {BottomPanel} from "./BottomPanel";
import {StageHeader} from "./StageHeader";

export const App = () => {
  useEffect(() => {
    const stage = getCookie('setStage');
    saveCookie('setStage', '');
    if (stage)
      setStep(onNavButtonClick(stage, step));
  }, []);
  const headers = {
    2: 'Способ доставки',
    3: 'Подтверждение заказа',
  };
  const [nextButtonAvailable, setNextButtonAvailable] = useState(false);
  const [deliveryType, setDeliveryType] = useState(getCookie('deliveryType') || 'pickup');
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
        setButtonState={setNextButtonAvailable}
      /> :
      <ThirdScreen/>
    );
  return (
    <>
      <StageHeader
        header={headers[step]}
        onClick={payload => setStep(step => onNavButtonClick(payload, step))}
      />
      {currentScreen}
      <BottomPanel
        onClick={payload => setStep(step => onNavButtonClick(payload, step))}
        step={step} buttonAvailable={nextButtonAvailable} setButtonState={setNextButtonAvailable}
      />
    </>
  )
};