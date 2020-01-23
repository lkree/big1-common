import React, {useEffect} from "react";

export const SelfExportModule = ({className}) => {
  useEffect(() => {
    window.deliverySelfExport()
  });
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
            <ul className="delivery-selfExport__pickup-list"/>
        </section>
        <section className="delivery-selfExport__cities hidden">
          <input type="text"
                 className="delivery-selfExport__city-search-input"
                 placeholder="Поиск города"/>
            <ul className="delivery-selfExport__cities-list"/>
        </section>
        <section className="delivery-selfExport__error hidden">
          <p className="delivery-selfExport__error-text">К сожалению пункты
            выдачи не найдены :(<br/>Попробуйте сменить город</p>
        </section>
      </div>
    </>
  )
};