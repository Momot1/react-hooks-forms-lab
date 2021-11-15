import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  const [array, setArray] = useState([...items])

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = array
  .filter(item => {
    if(search === ""){
      return item
    } else {
      if(item.name.toLowerCase().includes(search.toLowerCase())){
        return item
      }
    }
  })
  .filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  function handleSubmit(newItem){
    setArray([...array, newItem])
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={e => setSearch(e.target.value)} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
