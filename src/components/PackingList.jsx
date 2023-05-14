function Item({ name, isPacked, importance }) {
  return (
    <li className="item">
      {name} {isPacked ? '✔' : 'X'}

      {importance > 0 &&
        <> <i>(Importance: {importance})</i> </>
      }
      </li>
      );
}

      export default function PackingList() {
  return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item
            isPacked={true}
            importance={9}
            name="Space suit"
          />
          <Item
            isPacked={true}
            importance={0}
            name="Helmet with a golden leaf"
          />
          <Item
            isPacked={false}
            importance={6}
            name="Photo of Tam"
          />
        </ul>
      </section>
      );
}