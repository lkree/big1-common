import React, {useContext, useEffect} from "react";
import ModuleNextButton from "./ModuleNextButton";
import {DeliveryPropertiesContext} from "../context/DeliveryProperiesProvider";
import {DeliveryStatusContext} from "../context/DeliveryStatusContext";

export const SelfExportModule = ({className, next, setNext}) => {
  const [, updateStatus] = useContext(DeliveryStatusContext);
  const [{selfExport}, updateData] = useContext(DeliveryPropertiesContext);

  const onListClick = ({target}) => {
    updateStatus();
    updateData();
    target.classList.contains('delivery-selfExport__pickup-point--active') ||
    target.parentElement.classList.contains('delivery-selfExport__pickup-point--active') ?
      setNext(true) :
      setNext(false);
  };
  const onNextButtonClick = () => {
    const {showModule} = selfExport;
    updateData({
      selfExport: {
        ...selfExport,
        showModule: !showModule
      }
    });
  };

  useEffect(() => {
    window.deliverySelfExport();
  }, []);
  return (
    <>
      <div className={`delivery-selfExport ${className}`}
           data-delivery-type="Пункт выдачи">
        <div className="delivery-selfExport__wait-screen hidden preloader-mini">
          <div className="preloader-mini__item">
            <div className="preloader-mini__item-tool"/>
            <div className="preloader-mini__item-tool"/>
            <div className="preloader-mini__item-tool"/>
            <div className="preloader-mini__item-tool"/>
          </div>
        </div>
        <div className="delivery-selfExport__chosen-city-wrapper">
          <p className="delivery-selfExport__chosen-city-descr">Текущий
            город:&nbsp;</p>
          <p className="delivery-selfExport__chosen-city"/>
          <button className="delivery-selfExport__change-city">Выбрать другой
            город
          </button>
        </div>
        <section className="delivery-selfExport__pickup">
          <header className="delivery-selfExport__pickup-header">
            <p className="delivery-selfExport__pickup-header-text">Пункты
              выдачи</p>
            <button className="delivery-selfExport__show-map">Посмотреть на карте</button>
          </header>
          <input type="text"
                 className="delivery-selfExport__pickup-search-input"
                 placeholder="Поиск пункта выдачи"/>
          <header className={'delivery-selfExport__points-header'}>{selfExport.header}</header>
          <ul onClick={onListClick} className="delivery-selfExport__pickup-list"/>
          {next && <ModuleNextButton onClick={onNextButtonClick} className={'delivery-pickup__continue-btn'}/>}
        </section>
        <section className="delivery-selfExport__error hidden">
          <p className="delivery-selfExport__error-text">К сожалению пункты
            выдачи не найдены :(<br/>Попробуйте сменить город</p>
        </section>
      </div>
    </>
  )
};