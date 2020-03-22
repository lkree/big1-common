export interface IOptions {
  addCarButtons: HTMLCollection;
  userExitWrapper: Element;
  carData: HTMLCollection;
}
export interface IProps extends IOptions {
  userExitLink: Element|null;
}
export interface ICheckStatementProps {
  condition: boolean;
  stateA: Function;
  stateB: Function;
}