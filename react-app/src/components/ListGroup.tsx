import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
// import { Fragment } from "react/jsx-runtime";
function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook
  const [SelectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      {/* fragment-tag */}
      <h1>{heading}</h1>
      {items.length === 0 && <p>Item not Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              SelectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
