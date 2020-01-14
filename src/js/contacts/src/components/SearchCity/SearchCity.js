export default class SearchCity extends React.Component {
  render() {
    const {onCityFilter} = this.props;
    return (
      <div className={'contacts__search-city-wrapper'}>
        <input type="text"
               onInput={onCityFilter}
               className={'contacts__search-input'}
               placeholder={'Поиск'}/>
        <div className={'contacts__search-city-help'}><span className={'contacts__search-city-icon'}/>&mdash; в городе есть офис обслуживания BIG1.RU</div>
      </div>
    )
  }
}