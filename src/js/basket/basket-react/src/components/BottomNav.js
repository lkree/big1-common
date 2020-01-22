import React, {useEffect} from "react";
import {BottomNavButton} from "./BottomNavButton";

export const BottomNav = ({step, onClick, buttonAvailable, setButtonState}) => {
  useEffect(() => {
    const isCookieOk = [getCookie('deliveryAddress'), getCookie('deliveryDeadline'), getCookie('deliveryCost'), getCookie('deliveryType')].every(el => !!el);

    setButtonState({
      available: isCookieOk
    });
  }, []);
  const renderButtons = () => {
    const buttonsData = {
      2: {
        text: ['Back To Basket', 'Next'],
        className: 'basket__react-bottom-nav-btn',
        onClick: [window.basketApi.returnToBasket, onClick.bind(null, 'add')],
        available: [true, buttonAvailable.available],
      },
      3: {
        text: ['Prev', 'Оформить'],
        className: 'basket__react-bottom-nav-btn',
        onClick: [onClick.bind(null, 'sub'), (evt) => evt.preventDefault()],
        available: [true, buttonAvailable.available],
      },
    };
    const buttonsCount = 2;
    return (new Array(buttonsCount)
      .fill(''))
      .map((_, i) => {
        const {text, className, onClick, available} = buttonsData[step];
        return <BottomNavButton key={i} text={text[i]} className={className} onClick={onClick[i]} available={available[i]}/>
      });
  };
  return (
    <div className={'basket__react-bottom-nav'}>
      {renderButtons()}
    </div>
  )
};