import "./style.css";

function CharCard({ name, status, image }) {
  return (
    <div className={status}>
      <div className="title">{name}</div>
      <img src={image} alt={name} />
    </div>
  );
}

export default CharCard;
