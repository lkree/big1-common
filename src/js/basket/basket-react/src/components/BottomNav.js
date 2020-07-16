import React, {useContext} from "react";
import {BottomNavButton} from "./BottomNavButton";
import {DeliveryStatusContext} from "../context/DeliveryStatusContext";

export const BottomNav = ({step, onClick}) => {
  const [buttonAvailable] = useContext(DeliveryStatusContext);
  const renderButtons = () => {
    const buttonsData = {
      2: {
        text: ['К корзине', 'Далее'],
        className: ['basket__react-bottom-nav-btn', 'basket__react-bottom-nav-btn'],
        onClick: [window.basketApi.returnToBasket, onClick.bind(null, 'add')],
        available: [true, buttonAvailable],
      },
      3: {
        text: ['Назад', 'Оформить'],
        className: ['basket__react-bottom-nav-btn', 'basket__react-bottom-nav-btn basket__react-bottom-nav-btn--confirm'],
        onClick: [onClick.bind(null, 'sub'), (evt) => {evt.preventDefault();

          BX24.callMethod(
              "crm.lead.list",
              {
                filter: { "EMAIL": "service@moika76.ru" },
                select: [ "ID", "TITLE" ]
              },
              function(result)
              {
                if(result.error())
                  console.error(result.error());
                else
                {
                  console.dir(result.data());
                  if(result.more())
                    result.next();
                }
              }
          );
        }],
        //document.querySelector('a.c-order.to-right').click()
        available: [true, buttonAvailable],
      },
    };
    const buttonsCount = 2;
    return (new Array(buttonsCount)
      .fill(''))
      .map((_, i) => {
        const {text, className, onClick, available} = buttonsData[step];
        return <BottomNavButton key={i} text={text[i]} className={className[i]} onClick={onClick[i]} available={available[i]}/>
      });
  };
  return (
    <div className={'basket__react-bottom-nav'}>
      {renderButtons()}
    </div>
  )
};