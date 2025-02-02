import { useState } from "react";
import "./App.css";


const initialItems = [
  { id: 1, description: "Passport", quantity: 2, packed: false },
  { id: 2, description: "socks", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
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

function Form() {
  
  const [description , setDescription] = useState("") ;
  const [quantity , setQuantity] = useState(1)
// console.log(description)
  function handleSubmit (e){
    // console.log(e.target)
    e.preventDefault() ;
  }

  

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <p>what do you need for your 😍 trip ?</p>
      <select value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1 ).map((num) => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>
      <input value={description}  type="text" placeholder="item..." 
       onChange={(e)=>setDescription(e.target.value)}  />
      <button>ADD</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="Packing-container">
      {initialItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

function Item({ item }) {
  return (
    <span className="item-container">
      <span className="item">
        {item.quantity} {item.description}
      </span>
      <span style={{ marginLeft: "10px", cursor: "pointer" }}>❌</span>
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
