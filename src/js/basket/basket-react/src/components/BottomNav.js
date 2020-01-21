import React from "react";
import {BottomNavButton} from "./BottomNavButton";

export const BottomNav = ({step, onClick}) => {
  const renderButtons = () => {
    const buttonsData = {
      2: {
        text: ['Back To Basket', 'Next'],
        className: 'basket__react-bottom-btn',
        onClick: [window.basketApi.returnToBasket, onClick.bind(null, 'add')],
      },
      3: {
        text: ['Prev', 'Оформить'],
        className: 'basket__react-bottom-btn',
        onClick: [onClick.bind(null, 'sub'), (evt) => evt.preventDefault()],
      },
    };
    const buttonsCount = 2;
    return (new Array(buttonsCount)
      .fill(''))
      .map((_, i) => {
        const {text, className, onClick} = buttonsData[step];
        return <BottomNavButton key={i} text={text[i]} className={className} onClick={onClick[i]}/>
      });
  };
  return (
    <div className={'basket__react-bottom-nav'}>
      {renderButtons()}
    </div>
  )
};