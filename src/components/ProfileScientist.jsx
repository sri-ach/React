
export function ProfileScientist({ scientist, size = 70 }) {
  return (
    <section className="profile">
      <h2>{scientist.name}</h2>
      <img
        className="avatar"
        src={scientist.ImageUrl}
        alt={scientist.name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {scientist.Profession}
        </li>
        <li>
          <b>Awards: {scientist.Awards} </b> 
              {scientist.AwardsDetails}
        </li>
        <li>
          <b>Discovered: {scientist.Discovered}</b>
          
        </li>
      </ul>
    </section>
  )
}