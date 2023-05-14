import Avatar from "./Avatar"

export function ProfileScientist({ scientist }) {
  return (
    <section className="profile">
      <h2>{scientist.name}</h2>
      <Avatar person={scientist} size = {200} />
      <ul>
        <li>
          <b>Profession: </b>
          {scientist.Profession}
        </li>
        <li>
          <b>Awards: {scientist.Awards} </b> <br></br>
          {scientist.AwardsDetails}
        </li>
        <li>
          <b>Discovered: {scientist.Discovered}</b>

        </li>
      </ul>
    </section>
  )
}