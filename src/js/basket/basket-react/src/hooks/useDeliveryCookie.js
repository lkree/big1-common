import React, {useEffect, useState} from "react";
import useCookie from "./useCookie";

const useDeliveryCookie = (initialState) => {
  const [cookie, setCookie] = useCookie((typeof initialState === 'string' && [initialState]) || initialState);
  const [status, setStatus] = useState(false);
  const updateCookie = () => setCookie();

  useEffect(() => {
    setStatus(cookie && Object.keys(cookie).every(e => !!cookie[e]));
  }, [cookie]);

  return [status, updateCookie];
};

export default useDeliveryCookie;