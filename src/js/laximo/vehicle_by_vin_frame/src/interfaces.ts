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