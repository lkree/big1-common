export interface IOptions {
  addCarButtons: NodeListOf<HTMLButtonElement>;
  userExitWrapper: Element;
  carData: NodeListOf<HTMLTableRowElement>;
  authToken: string;
}
export interface IProps extends IOptions {
  userExitLink: Element;
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
  _then: (cb: string, ...args) => this;
  _checkStatement: ({condition, stateA, stateB}: ICheckStatementProps) => Function;
  checkForUserLogin: () => boolean;
  getCarData: () => void;
  checkForAlreadyAddedVIN: () => Promise<boolean>|boolean;
  alreadyAddedHandler: () => void;
  dontAddedHandler: () => void;
  dontLoginHandler: () => void;
}
export interface IApp {
  initiate: (props: IProps) => Promise<void>;
}