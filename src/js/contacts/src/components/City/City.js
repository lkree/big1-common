import CityButton from "../CityButton/index";

export default class City extends React.Component {
  render() {
    const {kladr_id, name, branches, renderBranch, firstLetter, onClick, mapLink} = this.props;
    return (
      <li key={kladr_id} className={'contacts__item'}>
        {
          firstLetter ?
            <div className={'contacts__item-first-letter'}>{firstLetter}</div> :
            undefined
        }
        {
          this.props.branches ?
            <CityButton name={name} onClick={renderBranch} branches={branches} mapLink={mapLink}/> :
            <CityButton name={name} onClick={onClick} kladr_id={kladr_id}/>
        }
      </li>
    )
  }
};