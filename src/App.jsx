import './App.css';
import {useState} from "react"
import FruitList from './components/FruitList';

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const totalPrice = fruits.reduce((acc, next) => {
    return acc + next.price
  }, 0)

  function filterRedFruits () {
    const redFruits = fruits.filter(fruit => fruit.color === "red")
    return setFruits(redFruits)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Total price: {totalPrice.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} </h2>
        <ul>
          {
            fruits.map(({name}, i) => {
              return <FruitList key={i} name={name} ></FruitList>
            })
          }
        </ul>
        
        <button onClick={filterRedFruits}>Filter red color</button>
      </header>
    </div>
  );
}

export default App;
