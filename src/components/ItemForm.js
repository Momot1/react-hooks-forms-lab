import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemName, setItemName] = useState("")
  const [itemCategory, setItemCategory] = useState("Produce")

  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: itemName,
    category: itemCategory,
  };

  return (
    <form className="NewItem" onSubmit={(e) => {
        e.preventDefault()
        onItemFormSubmit(newItem)
      }}>
      <label>
        Name:
        <input type="text" name="name" onChange={e => setItemName(e.target.value)}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={e => setItemCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;