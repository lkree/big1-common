import {IGetFormData} from "../../../utils/interfaces";

export interface IProps {
  promoWrapper: Element;
  authToken: string;
  cityEdit: Element;
  promoPopup: HTMLElement | null;
}
export interface IApp<T> {
  createListeners: () => IApp<T>;
  addListeners: () => IApp<T>;
  l: T;
}
export interface IListeners {
  onPromoBtnClick: (evt: Event) => void;
  onCityEditClick: (evt: Event) => void;
  onDeleteButtonClick: (evt: Event) => void;
}
export interface IPromoInputHandler<T> {
  hideButton: (button: HTMLButtonElement) => IPromoInputHandler<T>;
  showButton: (button: HTMLButtonElement) => IPromoInputHandler<T>;
  setFormData: (data: IGetFormData[]) => IPromoInputHandler<T>;
  getPromoSubmitLink: () => IPromoInputHandler<T>;
  sendPromoCode: () => Promise<IPromoInputHandler<T>>;
  getPromoCode: () => Promise<IPromoInputHandler<T>>;
  setResolvedPromo: () => IPromoInputHandler<T>;
  getPopupWrongPromo: () => IPromoInputHandler<T>;
  resetPromoWrapper: () => IPromoInputHandler<T>;
  v: T;
}
export interface IPromoInputValues {
  formData: FormData;
  promoCode: string;
  promoSubmitLink: string;
}