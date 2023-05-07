import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
/* PROPS:
- {items}: ARRAY of items
- onItemFormSubmit() -> App.handleItemFormSubmit(e)
*/
/* STATE:
- selectedCategory: category selected from options menu
- searchQuery: items searched based on text input
*/
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [search, setSearch] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value)
    // console.log("handleCategoryChange(e) fired from ShoppingList: " + event.target.value)
  }

  const itemsToDisplay = items
  .filter(item => selectedCategory === "All" || item.category === selectedCategory)
  .filter(it => it.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter 
        search={search} 
        onCategoryChange={handleCategoryChange} 
        onSearchChange={setSearch} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
