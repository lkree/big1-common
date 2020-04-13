import React, {createContext} from 'react';
import useDeliveryCookie from "../hooks/useDeliveryCookie";

export const DeliveryStatusContext = createContext([{}, () => {}]);

const DeliveryStatusProvider = ({children}) => {
  const [state, setState] = useDeliveryCookie(['deliveryAddress', 'deliveryType', 'deliveryCost', 'deliveryDeadline']);

  return (
    <DeliveryStatusContext.Provider value={[state, setState]}>
      {children}
    </DeliveryStatusContext.Provider>
  );
};

export default DeliveryStatusProvider;