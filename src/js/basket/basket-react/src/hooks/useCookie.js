import React, {useEffect, useState} from "react";

/**
 * @param initialState {Object: {String} | Array<String>}
 * @returns {[Object, Function]}
 */
const useCookie = (initialState) => {
  const getCookie = (name) => {
    const matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  };
  const setCookie = (name, value) => {
    const options = {
      path: '/',
      secure: true,
      'expires': new Date(Date.now() + 11586400e5),
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
  const _cookieHandler = (state) => {
    if (Array.isArray(state))
      return state.reduce((prev, e) => {prev[e] = getCookie(e); return prev}, {});
    else
      return state;
  };
  const updateCookie = () => setState(state => _cookieHandler(Object.keys(state)));
  // const updateCookie = newState => setState(() => {
  //   setState(newState);
  // });

  const [state, setState] = useState(_cookieHandler(initialState));

  useEffect(() => {
    state && Object.keys(state)[0] && Object.keys(state).forEach(e => state[e] && setCookie(e, state[e]))
  }, [state]);

  return [state, updateCookie];
};

export default useCookie;