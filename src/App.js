import './styles/App.scss';
import React, {useEffect, useState} from "react";
import axios from "axios";
import Loader from "./components/Loader";
import CardItem from "./components/CardItem";

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

  const [coffee, setCoffee] = useState([])
  const [order, setOrder] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const arrCoffee = await axios.get('https://61a788d3387ab200171d2d86.mockapi.io/arrCoffee')
        const correctCoffeeHot = arrCoffee.data[0].hot.map((i) => {
          i.modify = 'hot'
          return i
        })
        const correctCoffeeCold = arrCoffee.data[0].cold.map((i) => {
          i.modify = 'cold'
          return i
        })
        setCoffee([...correctCoffeeHot, ...correctCoffeeCold])

      } catch (error) {
        alert('Error while requesting data :(')
        console.error(error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
      if (Object.keys(order).length) {
          const timer = setTimeout(() => {
              async function fetchData() {
                  try {
                      const orderPost = await axios.post('https://61a788d3387ab200171d2d86.mockapi.io/order', order)
                      console.log(orderPost.data)
                  } catch (error) {
                      alert('Error while requesting data :(')
                      console.error(error)
                  }
              }
              setIsLoading(true)
              fetchData()
          }, 5000)
          setIsLoading(false)
          return () => clearTimeout(timer)
      }
  }, [order])

  if (!isLoading) {
    return (
        <div className='coffee'>
          <Loader />
        </div>
    )
  }

  return (
    <div className='coffee'>
        {coffee.map((item, index) => {
          if (item.modify === 'hot') {
            return <CardItem setOrder={setOrder}  key={item.type} {...item} index={index} />
          }
          if (item.modify === 'cold') {
            return <CardItem setOrder={setOrder}  key={item.type} {...item} index={index} />
          }
        })}
    </div>
  );
}

export default App;
