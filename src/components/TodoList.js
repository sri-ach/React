import * as scientists from "../data/scientist_list";

import Avatar from "./Avatar";

export default function TodoList() {

  const heddy = scientists.heddy

  const today = new Date();

  function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  }

  return (
    <div style={heddy.theme}>    
      <h1>
        {heddy.name}'s Todo list for {formatDate(today)}
      </h1>
      <Avatar person={heddy}/>
      <ul
        style={heddy.theme}
      >
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </div>
  );
}
