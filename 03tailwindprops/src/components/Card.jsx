import React from "react";

// note: this custom component can be imported anywhere, like App.jsx or main.jsx

function Card() {
  return (
    <div>
      <img src="https://picsum.photos/600/300" alt="" />
      <h1 className="text-2xl bg-green-500 p-3 rounded">A card for photos</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, alias.
      </p>
    </div>
  );
}

export default Card;
