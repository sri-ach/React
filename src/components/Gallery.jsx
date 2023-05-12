import * as scientists from "../data/scientist_list";
import { Profile } from "./Profile";

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Profile person={scientists.madamCurie} />
        <Profile person={scientists.katsuko} />
        <Profile person={scientists.heddy} />
      </div>
    </div>
  );
}
