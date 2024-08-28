import React, { useEffect, useState } from 'react';
import { getMenuByRestaurant } from '../services/MenuService';

function Menu({ restaurantId }) {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const data = await getMenuByRestaurant(restaurantId);
      setMenu(data);
    };
    fetchMenu();
  }, [restaurantId]);

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {menu.map((item) => (
          <li key={item._id}>{item.name} - {item.price}€</li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
