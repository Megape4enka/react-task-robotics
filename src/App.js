import './styles/App.scss';
import React, {useEffect, useState} from "react";
import ColdCoffee from "./components/ColdCoffee";
import HotCoffee from "./components/HotCoffee";
import axios from "axios";

function App() {
  // const arrCoffee = {
  //   "hot": [
  //     {
  //       "type": "espresso",
  //       "sizes": ["small"],
  //       "price": 2.0,
  //       "syrups": ["no"]
  //     },
  //     {
  //       "type": "cappuccino",
  //       "sizes": ["small", "large"],
  //       "price": 3.5,
  //       "syrups": ["no", "caramel", "vanilla", "chocolate"]
  //     },
  //     {
  //       "type": "americano",
  //       "sizes": ["small", "large"],
  //       "price": 3.0,
  //       "syrups": ["no", "caramel", "vanilla", "chocolate"]
  //     },
  //     {
  //       "type": "latte",
  //       "sizes": ["small", "large"],
  //       "price": 4.5,
  //       "syrups": ["no", "caramel", "vanilla", "chocolate"]
  //     }
  //   ],
  //   "cold": [
  //     {
  //       "type": "ice_cappuccino",
  //       "sizes": ["large"],
  //       "price": 4.5,
  //       "syrups": ["no", "caramel", "vanilla", "chocolate"]
  //     },
  //     {
  //       "type": "ice_latte",
  //       "sizes": ["large"],
  //       "price": 5.5,
  //       "syrups": ["no", "caramel", "vanilla", "chocolate"]
  //     }
  //   ]
  // }

  const [coffeeCold, setCoffeeCold] = useState([])
  const [coffeeHot, setCoffeeHot] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const arrCoffee = await axios.get('https://61a788d3387ab200171d2d86.mockapi.io/arrCoffee')

        setCoffeeCold(arrCoffee.data[0].cold)
        setCoffeeHot(arrCoffee.data[0].hot)
      } catch (error) {
        alert('Error while requesting data :(')
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className='coffee'>
      <div>
        <h2>Hot drinks:</h2>
        {coffeeHot.map(obj => (
            <HotCoffee key={obj.type} {...obj} />
        ))}
      </div>
      <div>
        <h2>Cold drinks:</h2>
        {coffeeCold.map(obj => (
            <ColdCoffee key={obj.type} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default App;
