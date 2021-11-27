import "./CardCustoms.css";

export default function CardCustoms(props) {
  return (
    <div className="cardCust" onClick={props.onClick}>
      <img src={props.img} width="100" height="100" alt="" className="photo" />
      <div className="description">
          <p id="titleCust">{props.titleCust}</p>
          <p id="genreCust">{props.genreCust}</p>
      </div>
    </div>
  );
}