import { useEffect, useState } from "react";
import ListGroup from "./components/ListGroup";
import Button from "./components/button";
import Alert from "./components/Alert";

function app() {
  const [items, setItems] = useState(["Apple", "Mango", "Banana"]);
  const [currentItem, setCurrentItem] = useState("");
  const [sendValue, setSendValue] = useState("");

  return (
    <div>
      <ListGroup
        items={items}
        heading="Fruit"
        onSelectItem={(item) => setCurrentItem(item)}
      />
      <Button onClick={() => setSendValue(currentItem)} />

      <Alert alertText={sendValue}></Alert>
    </div>
  );
}

export default app;
