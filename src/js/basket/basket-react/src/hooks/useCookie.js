import React, {useState} from "react";

/**
 *
 * @param names {Array<string>}
 * @returns {[Object, Function]}
 */
const  useCookie = (names) => {
  const getCookie = (name) => {
    const matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  };
  const saveCookie = (name, value) => {
    const options = {
      path: '/',
      secure: true,
      'max-age': new Date(Date.now() + 86400e5),
    };

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (const optionKey in options) {
      updatedCookie += "; " + optionKey;
      const optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }

    document.cookie = updatedCookie;
  };
  const initialState = {};

  names.forEach(e => {
    initialState[e] = getCookie(e);
  });

  const [cookie, setState] = useState(initialState);
  const setCookie = (newState = {}) => setState(state => {
    Object.keys(newState)[0] && Object.keys(newState).forEach(e => saveCookie(e, newState[e]));

    return {
      ...state,
      ...newState,
    }
  });

  return [cookie, setCookie];
};

export default useCookie;