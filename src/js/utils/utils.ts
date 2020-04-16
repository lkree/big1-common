import {IAddList} from './interfaces';

export const checkAvailable = (element: Element): boolean => !!element;
export const getText = (element: Element): string|null => element ? element.textContent : '';
export const handleClass = (element: Element, action: string, className: string): void => element.classList[action](className);
export const addClass = (element: Element, className: string): void => handleClass(element, 'add', className);
export const removeClass = (element: Element, className: string): void => handleClass(element, 'remove', className);
export const hasClass = (element: Element, className: string): boolean => element.classList.contains(className);
export const escapeHtml = (text: string): string => {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };

  return text.replace(/[&<>"']/g, (m) => map[m]);
};
export const activateButton = (button: HTMLButtonElement, className?: string): void => {
  button.disabled = false;
  document.body.style.cursor = 'default';
  className && handleClass(button, 'remove', className);
};
export const disableButton = (button: HTMLButtonElement, className?: string): void => {
  button.disabled = true;
  document.body.style.cursor = 'not-allowed';
  className && handleClass(button, 'add', className);
};
export const setDataSet = (element: HTMLElement, dataType: string, value: string): string => element.dataset[dataType] = value;
export const getDataSet = (element: HTMLElement, dataType: string): string|undefined => element ? element.dataset[dataType] : '';
export const clearEl = (element: Element): string => element.innerHTML = '';
export const clearInput = (element: HTMLInputElement): string => element.value = '';
export const removeElement = (element: any): null => element = null;
export const hide = (element: Element): void => handleClass(element, 'add', 'hidden');
export const show = (element: Element): void => handleClass(element, 'remove', 'hidden');
export const hideAll = (list: Element[]): void => [...list].forEach(hide);
export const showAll = (list: Element[]): void => [...list].forEach(show);
export const setText = (element: Element, text: string): string => element.textContent = text;
export const eventAdd = (element: Element|Document, event: string, handler: VoidFunction) => element.addEventListener(event, handler);
export const eventRemove = (element: Element, event: string, handler: VoidFunction) => element.removeEventListener(event, handler);
export const isMatch = (element: Element, matchElement: Element): boolean => element === matchElement;
export const removeListOfEvents = (list: IAddList[], filter: string): void => {
  list
    .filter((element) => element[filter])
    .forEach((e) => eventRemove(e.element, e.ev, e.listener))
};
export const addListOfEvents = (list: IAddList[], filter: string): void => {
  list
    .filter((element) => element[filter])
    .forEach((e) => eventAdd(e.element, e.ev, e.listener))
};
export const setWaitScreen = (waitScreen: Element): void => show(waitScreen);
export const disableWaitScreen = (waitScreen: Element): void => hide(waitScreen);
export const lowerCase = (element: string): string => element.toLowerCase();
export const checkSubString = (string: string, subString: string): boolean => {
  string = lowerCase(string);
  subString = lowerCase(subString);

  return !!~string.indexOf(subString);
};
export const showError = (errorSection: Element): void => show(errorSection);
export const hideError = (errorSection: Element): void => hide(errorSection);
export const clearStorage = (storages: string[]) => storages.forEach((storage) => localStorage.setItem(storage, ''));
export const flattenObjectValues = (array: any[]|any, key: string, initialValue = []) => {
  const flatten = (object, key, result) => {
    if (object && typeof object === 'object')
    {
      Object.keys(object).forEach(k => {
        if (typeof object[k] === 'object')
        {
          return flatten(object[k], key, result);
        }
        else
        {
          if (k === key)
            result.push(object[key]);

          return result;
        }
      });
    }

    return result;
  };

  array.forEach(element => initialValue = flatten(element, key, initialValue));

  return initialValue;
};
export const getFormData = (data: Array<{key: string; value: any}>): FormData => {
    const formData = new FormData();

    data.forEach(({key, value}) => formData.append(key, value));

    return formData;
};