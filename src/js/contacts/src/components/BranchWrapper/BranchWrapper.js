import Branch from "../Branch/index";

export default class BranchWrapper extends React.Component {
  renderBranch = (branches) => (
    branches.map(({name, street, schedule, photos, id}) => {
      const props = {
        name: name,
        street: street,
        schedule: schedule,
        photos: photos,
        key: name,
        onClick: this.props.onBranchClick,
        id: id,
      };
      return <Branch {...props}/>
    })
  );
  render() {
    const {branches, onClick, mapLink} = this.props;
    return (
      <>
        <button onClick={onClick} className={'contacts__back-button'}>Назад</button>
        <header className={'contacts__branches-wrapper-header'}>Офисы обслуживания BIG1.RU</header>
        <ul className={'contacts__branches-wrapper'}>
          {this.renderBranch(branches)}
        </ul>
        <iframe src={mapLink}
                width="100%"
                height="360"
                frameBorder="0"/>
      </>
    )
  }
};