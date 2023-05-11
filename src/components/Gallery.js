import Avatar from "./Avatar";
import { Person } from "../data/person";

const katsuko = new Person('Katsuko Saruhashi', 'YfeOqp2')
const heddy = new Person('Hedy Lamarr','yXOvdOS', 'm', {
  backgroundColor: 'black',
  color: 'pink'
} )


export default function Gallery() {
  return (
    <div>
      <h1>Amazing scientists</h1>
      <Avatar person={katsuko}/>
      <Avatar person={heddy}/>
     
    </div>
  );
}
