import React from "react";

export default function Restaurants({ restaurants }) {
  return (
    <div>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            {restaurant.name} | {restaurant.category} | {restaurants.address}
          </li>
        ))}
      </ul>
    </div>
  );
}
