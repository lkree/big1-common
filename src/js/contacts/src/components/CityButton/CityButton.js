export default class CityButton extends React.Component {
  render() {
    const {name, onClick, branches, kladr_id, mapLink} = this.props;
    const className = branches ? 'contacts__city-button contacts__city-button--branch' : 'contacts__city-button';
    const setParams = (evt) => branches ?
      {
        branches: branches,
        mapLink: mapLink
      } :
      {
        evt: evt,
        kladr_id: kladr_id,
      };

    return (
      <>
        <button className={className} onClick={(evt) => onClick(setParams(evt))}>{name}</button>
      </>
    )
  }
};