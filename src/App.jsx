import { useState } from "react";
import { Card, ShoeList, CartList } from "./components";

function App() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("shoes")) || []
  );

  const setLocalStorageValue = (listData) => {
    localStorage.setItem("shoes", JSON.stringify(listData));
    setCart(listData);
  };

  const handleAddToCart = (data, id) => {
    if (cart.map((x) => x.id).includes(id)) {
      return;
    }
    const shoe = {
      ...data,
      quantity: 1,
    };
    const listShoe = [...cart, shoe];
    setLocalStorageValue(listShoe);
  };

  const removeItem = (id) => {
    const listShoe = JSON.parse(localStorage.getItem("shoes")) || [];
    const newList = listShoe.filter((item) => item.id !== id);
    setLocalStorageValue(newList);
  };

  const handleChange = (item, qty) => {
    const index = cart.indexOf(item);
    const arr = cart;
    arr[index].quantity += qty;
    if (arr[index].quantity === 0) {
      let newArr = arr.filter((shoe) => shoe.id !== arr[index].id);
      setLocalStorageValue([...newArr]);
    } else {
      setLocalStorageValue([...arr]);
    }
  };

  return (
    <main>
      <Card title="Our Products">
        <ShoeList onAdd={handleAddToCart} cart={cart} />
      </Card>
      <Card title="Your cart" visiblePrice={true} cart={cart}>
        <CartList cart={cart} onDelete={removeItem} onChange={handleChange} />
      </Card>
    </main>
  );
}

export default App;
