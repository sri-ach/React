import "./styles.css";

export default function Avatar({ person, size = 100 }) {
  return (
    <>
      <img className="avatar" src={person.ImageUrl} alt={person.name} width={size} height={size} />
      <h5>{person.name}</h5>
    </>
  );
}
