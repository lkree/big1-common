export default class CitiesList extends React.Component {
  render() {
    const {renderCity} = this.props;
    const cities = renderCity();

    return (
      <ul className={'contacts__city-list'}>
        {cities}
      </ul>
    );
  }
};