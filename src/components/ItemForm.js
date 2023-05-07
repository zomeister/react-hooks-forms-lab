import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  const [searchQuery, setSearchQuery] = useState("")
  const [category, setCategory] = useState("All")

  function handleSearchQueryChange(e){
    setSearchQuery(e.target.value)
  }
  function handleCategoryChange(e){
    setCategory(e.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    onItemFormSubmit(
      {
        id: uuid(),
        name: searchQuery,
        category: category,
      }
    )
  }

  
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text"
          name="name" 
          value={searchQuery}
          onChange={handleSearchQueryChange} 
          />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={handleCategoryChange}
        >
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
