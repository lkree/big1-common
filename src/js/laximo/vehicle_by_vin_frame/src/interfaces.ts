export interface IOptions {
  addCarButtons: HTMLCollection;
  userExitWrapper: Element;
  carData: HTMLCollection;
  authToken: string;
}
export interface IProps extends IOptions {
  userExitLink: Element|null;
}
export interface ICheckStatementProps {
  condition: boolean;
  stateA: Function;
  stateB: Function;
}
export interface IAppInitiate {
  authToken: string;
  carVIN: string;
  carName: string;
  carModel: string;
  carYear: string;
  isCarAlreadyAdded: boolean;
  _then: Function;
  _checkStatement: Function;
  checkForUserLogin: Function;
  getCarData: Function;
  checkForAlreadyAddedVIN: Function;
  alreadyAddedHandler: Function;
  dontAddedHandler: Function;
  dontLoginHandler: Function;
}
export interface IApp {
  initiate: Function;
}