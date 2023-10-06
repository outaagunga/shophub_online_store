// import React, { useState } from "react";
// import { useMyContextHook } from "./MyContext/MyContext";

// function Card({
//   product_name,
//   product_description,
//   product_full_image,
//   unit_price,
//   onAddToCart,
// }) {
//   const { darkMode } = useMyContextHook();
//   const [showFullDescription, setShowFullDescription] = useState(false);

//   const toggleDescription = () => {
//     setShowFullDescription(!showFullDescription);
//   };

//   return (
//     <div className="card">
//       {product_full_image && (
//         <img src={product_full_image} alt={product_name} />
//       )}
//       <h3>{product_name}</h3>

//       {showFullDescription ? (
//         <p className="description"id={darkMode ? "dark-mode2" : ""}>{product_description}</p>
//       ) : (
//         <p className="description" id={darkMode ? "dark-mode" : ""}>
//           {product_description.slice(0, 100)}
//         </p>
//       )}

//       <p className="seemore" onClick={toggleDescription}>
//         {showFullDescription ? "See Less" : "See More"}
//       </p>

//       <div className="price">
//         <p className="unitprice">Price: Ksh {unit_price}</p>
//         <button onClick={onAddToCart}>Add to Cart</button>
//       </div>
//     </div>
//   );
// }

// export default Card;

import React, { useState } from "react";
import { useMyContextHook } from "./MyContext/MyContext";

function Card({
  product_name,
  product_description,
  product_full_image,
  unit_price,
  onAddToCart,
}) {
  const { darkMode } = useMyContextHook();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="card">
      {product_full_image && (
        <img src={product_full_image} alt={product_name} />
      )}
      <h3>{product_name}</h3>

      {product_description ? (
        <p className="description" id={darkMode ? "dark-mode" : ""}>
          {showFullDescription
            ? product_description
            : product_description.slice(0, 100)}
        </p>
      ) : null}

      <p className="seemore" onClick={toggleDescription}>
        {showFullDescription ? "See Less" : "See More"}
      </p>

      <div className="price">
        <p className="unitprice">Price: Ksh {unit_price}</p>
        <button onClick={onAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Card;
