import { useState } from "react";
import "./App.css";

// const x = ["é","rf","f"]
// console.log(...x)   const obj = {name:"marwa" , country:"tunisia"}
/// ...obj ==>  name:"marwa" , country:"tunisia"

export default function App() {
  const [items, setItems] = useState([]);
  console.log(items)



  function handleAddItems(newItem) {
    setItems((currentItems) => [...currentItems, newItem]);
  }
  function handleToggleItem (id){
  setItems(()=>items.map((ele)=> ele.id === id ? {...ele , packed :!ele.packed }:ele))
  }

  function handleDeleteItems (id){
   setItems(()=> items.filter((ele)=> ele.id !== id))
  }
  return (
    <div>
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList items ={items} handleDeleteItems={handleDeleteItems} handleToggleItem={handleToggleItem} />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <div className="title-container">
      <h1>🌴 FAR AWAY 👜</h1>
    </div>
  );
}

function Form({handleAddItems}) {
  // console.log(description)
  /////// onChange , value ==> controlled element ....
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);


  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return; //// technique early return
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    handleAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <p>what do you need for your 😍 trip ?</p>

      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        value={description}
        type="text"
        placeholder="item..."
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}

function PackingList({items , handleDeleteItems ,handleToggleItem}) {
  return (
    <div className="Packing-container">
      {items.map((item) => (
        <Item key={item.id} item={item} handleDeleteItems={handleDeleteItems} handleToggleItem={handleToggleItem} />
      ))}
    </div>
  );
}

function Item({ item , handleDeleteItems , handleToggleItem }) {
  console.log(item)
  return (
    <span className="item-container">
      <input style={{cursor:"pointer"}} type="checkbox" onClick={()=> handleToggleItem(item.id)}/>
      <span className="item" style={item.packed ? {textDecoration:"line-through"} : {} }>
        {item.quantity} {item.description}
      </span>
      <span onClick={()=>handleDeleteItems(item.id)} style={{ marginLeft: "10px", cursor: "pointer" }}>❌</span>
    </span>
  );
}
//// ctr + i  ===> htm tag wrapper
function Stats() {
  return (
    <div className="stats-container">
      <p>you have x items on your list , and you already packed x (x%)</p>
    </div>
  );
}
