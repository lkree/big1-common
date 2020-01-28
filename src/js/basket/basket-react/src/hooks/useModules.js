import React, {useState} from "react";

/**
 * @param initialState {Boolean}
 * @returns {[Boolean, Function]}
 */
const useModules = (initialState) => {
  const [state, setState] = useState(initialState);

  const updateStatus = element => {
    setState(element && element.classList.contains('delivery-selfExport__pickup-point') ?
      !!element.classList.contains('delivery-selfExport__pickup-point--active') :
      !!element.parentElement.classList.contains('delivery-selfExport__pickup-point--active'));
  };

  return [state, updateStatus];
};

export default useModules;