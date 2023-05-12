import Avatar from "./Avatar"
import Card from "./Card"

export function Profile({ person }) {
  return (
    <Card>
      <Avatar person={person} />
    </Card>
  )
}
