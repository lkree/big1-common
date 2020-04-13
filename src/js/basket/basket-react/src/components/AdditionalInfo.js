import React, {useState, useEffect, useContext} from "react";
import {AdditionalInfoItem} from "./AdditionalInfoItem";
import {DeliveryPropertiesContext} from "../context/DeliveryProperiesProvider";

export const AdditionalInfo = () => {
  const [data, getData] = useState({
    header: '',
    name: '',
    phone: '',
    schedule: '',
    mapLink: '',
  });
  const [{deliveryType, deliveryCity, deliveryAddress}] = useContext(DeliveryPropertiesContext);
  useEffect(() => {
    const getPickUpData = () => {
      const cityData = window.citiesList.filter(({name}) => name === deliveryCity)[0];
      const {mapLink = ''} = cityData;
      let props = [];

      cityData &&
        cityData.branches &&
          Object.keys(cityData.branches)
            .forEach(k => props = [...props, ...cityData.branches[k]]);

      props = {
        ...props
          .filter(({name}) => name === deliveryAddress)[0]
      };
      getData( {
        ...props,
        header: 'Контактная информация',
        mapLink,
      });
    };
    const getSelfExportData = () => {
      const getDeliveryPoints = (city, id) => {
        const shiptorApi = new ShiptorPointsGetter({usersCity: city, fromCity: '_'});

        shiptorApi.getUsersCityKladr()
          .then(() => {
            shiptorApi.getDeliveryPoints()
              .then(({result}) => {
                const res = result.filter(el => el.id === id);
                try {
                  const [{address: name, phones = [], work_schedule: schedule}] = res;
                  getData({
                    header: 'Контактная информация',
                    name,
                    phone: phones[0] && phones.reduce((prev, curr) => `${prev} + /n + ${curr}`),
                    schedule,
                    mapLink: '',
                  })
                } catch({message}) {
                  console.log(message);
                }
              });
          })
      };
      const city = getCookie('deliveryCity');
      const id = +getCookie('selfExportPointId');

      getDeliveryPoints(city, id);
    };

    try {
      if (deliveryType === 'pickup') getPickUpData();
      else getSelfExportData();
    } catch({message}) {
      console.log(message);
    }
  }, []);
  const renderItem = () => {
    const data = {name, phone, schedule};
    const dataKeys = Object.keys(data);

    return dataKeys.map(k => data[k] && <AdditionalInfoItem text={data[k]} className={k}/>)
  };
  const {header = '', name = '', phone = '', schedule = '', mapLink = ''} = data;

  return ((header && name) || mapLink) && (
    <section className={'basket__react-additional-info'}>
    <header className={'basket__react-additional-info-header'}>{header}</header>
    <div className="basket__react-additional-info-body">
      <div className="basket__react-additional-info-left-part">
        {renderItem()}
      </div>
      <div className="basket__react-additional-info-right-part">
        {mapLink &&
            <iframe src={mapLink}
                    width="100%"
                    height="100%"
                    frameBorder="0"/>}
      </div>
    </div>
  </section>
  )
};