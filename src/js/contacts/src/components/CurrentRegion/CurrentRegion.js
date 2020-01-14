export default class CurrentRegion extends React.Component {
  render() {
    const {currentCity} = this.props;
    return (
      <header className={'contacts__current-region'}>
        <span className={'contacts__current-region-title'}>Ваш город: </span>
        <span className={'contacts__current-region-city'}>{currentCity}</span>
      </header>
    )
  }
}