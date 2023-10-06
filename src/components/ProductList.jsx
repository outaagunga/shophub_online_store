import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useMyContextHook } from "./MyContext/MyContext";
import { toast } from "react-toastify";
import "./CartItems.css";

function ProductList() {
  const {
    darkMode,
    products,
    setProducts,
    fetchProducts,
    cartCounter,
    setcartCounter,
  } = useMyContextHook();

  // State to manage the cart items
  const [cartItems, setCartItems] = useState({});

  // State to keep track of the total number of items in the cart
  const [totalCartItems, setTotalCartItems] = useState(0);

  // State to track the total price of all items in the cart
  const [totalPrice, setTotalPrice] = useState(0);

  // State to toggle display of cart details
  //const [showCartDetails, setShowCartDetails] = useState(false);

  //

  //

  // State to handle the delivery address input
  const [deliveryAddress, setDeliveryAddress] = useState("");

  // Fetch the products from the server when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to handle adding a product to the cart
  const handleAddToCart = (product) => {
    const productId = product.product_name; // or use product.id if available
    const existingCartItemQuantity = cartItems[productId] || 0;

    // If the product is not in the cart, add it to the cartItems state
    if (existingCartItemQuantity === 0) {
      const updatedCartItems = {
        ...cartItems,
        [productId]: 1,
      };
      setCartItems(updatedCartItems);
    } else {
      // If the product is already in the cart, update its quantity
      const updatedCartItems = {
        ...cartItems,
        [productId]: existingCartItemQuantity + 1,
      };
      setCartItems(updatedCartItems);
    }

    // Update the total count of cart items
    setTotalCartItems((prevCount) => prevCount + 1);
    setcartCounter((prevCount) => prevCount + 1);

    // Update the total price
    setTotalPrice((prevPrice) => prevPrice + product.unit_price);

    toast.success(`Added 1 ${product.product_name} to the cart!`);
  };

  // Function to handle reducing the quantity of a product in the cart
  const handleRemoveFromCartClick = (productId) => {
    const existingCartItemQuantity = cartItems[productId] || 0;

    // Check if the item is already in the cart
    if (existingCartItemQuantity > 0) {
      // Reduce the quantity by 1
      const updatedCartItems = {
        ...cartItems,
        [productId]: existingCartItemQuantity - 1,
      };
      setCartItems(updatedCartItems);

      // Update the total count of cart items
      setTotalCartItems((prevCount) => prevCount - 1);
      setcartCounter((prevCount) => prevCount - 1);

      // Update the total price
      setTotalPrice(
        (prevPrice) =>
          prevPrice -
          products.find((item) => item.product_name === productId).unit_price
      );

      toast.warning(
        `Removed 1 ${
          products.find((item) => item.product_name === productId).product_name
        } from the cart.`
      );

      // If the quantity becomes zero, remove the product from cartItems state
      if (existingCartItemQuantity === 1) {
        const { [productId]: _, ...updatedCartItemsWithoutProduct } =
          updatedCartItems;
        setCartItems(updatedCartItemsWithoutProduct);
      }
    }
  };

  // Function to handle the "Remove" button click for a product in the cart
  const handleRemoveFromCart = (productId) => {
    handleRemoveFromCartClick(productId); // Call the existing remove handler
  };

  // Leave this place commented- it is abackup incase this go wrong

  //
  // const handleDeliveryChange = (address) => {
  //   setDeliveryAddress(address);
  // };

  // // Function to handle the checkout process
  // const handleCheckout = () => {
  //   if (deliveryAddress.trim() === "") {
  //     toast.warning("Please provide a delivery address before checkout.");
  //   } else {
  //     toast.success("Checkout successful! Thank you for your purchase!");
  //     setCartItems({});
  //     setTotalCartItems(0);
  //     setTotalPrice(0);
  //   }
  // };

  //
  // Function to handle the delivery address input change
  const handleDeliveryChange = (address) => {
    setDeliveryAddress(address);
  };

  // Simulate generating a receipt
  const generateReceipt = () => {
    const receipt = {
      items: cartItems,
      totalItems: totalCartItems,
      totalPrice: totalPrice,
      deliveryAddress: deliveryAddress,
      // Add more fields as needed
    };

    return receipt;
  };

  const [receipt, setReceipt] = useState(null);
  //.
  useEffect(() => {
    if (receipt) {
      const timeout = setTimeout(() => {
        setReceipt(null);
      }, 10000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [receipt]);

  //.
  // // Function to display the receipt details to the user
  // const displayReceipt = (receipt) => {
  //   const receiptContainer = document.getElementById("receipt-container"); // Assuming you have an element with id "receipt-container"

  //   // Create HTML structure for displaying the receipt
  //   const receiptHTML = `
  //   <h2>Receipt</h2>
  //   <p><strong>Delivery Address:</strong> ${receipt.deliveryAddress}</p>
  //   <ul>
  //     ${Object.keys(receipt.items)
  //       .map(
  //         (itemKey) => `
  //       <li>${receipt.items[itemKey].name} - Quantity: ${receipt.items[itemKey].quantity}</li>
  //     `
  //       )
  //       .join("")}
  //   </ul>
  //   <p><strong>Total Items:</strong> ${receipt.totalItems}</p>
  //   <p><strong>Total Price:</strong> ${receipt.totalPrice}</p>
  // `;

  //   // Set the HTML content of the container to display the receipt
  //   receiptContainer.innerHTML = receiptHTML;
  // };
  //.
  const displayReceipt = (receipt) => {
    const receiptContainer = document.getElementById("receipt-container");

    const receiptHTML = `
      <div class="receipt-container">
        <div class="receipt-header">
          <h2>Receipt</h2>
        </div>
        <div class="receipt-divider"></div>
        <div class="receipt-address">
          <p class="receipt-address-title">Delivery Address:</p>
          <p>${receipt.deliveryAddress}</p>
        </div>
        <div class="receipt-divider"></div>
        <div class="receipt-item-list">
          <ul class="receipt-item-list">
            ${Object.keys(receipt.items)
              .map(
                (itemKey) => `
              <li class="receipt-item">
                <span>${
                  products.find((product) => product.product_name === itemKey)
                    .product_name
                }</span>
                <span class="receipt-item-quantity">Quantity: ${
                  receipt.items[itemKey]
                }</span>
              </li>
            `
              )
              .join("")}
          </ul>
        </div>
        <div class="receipt-divider"></div>
        <div class="receipt-total">
          <p class="receipt-total-value">Total Items: ${receipt.totalItems}</p>
          <p class="receipt-total-value">Total Price: Ksh ${
            receipt.totalPrice
          }</p>
        </div>
        <div class="receipt-divider"></div>
        <div class="receipt-thankyou">
          <p>Thank you for your purchase!</p>
        </div>
      </div>
    `;

    receiptContainer.innerHTML = receiptHTML;
  };

  // Function to handle the checkout process
  const handleCheckout = () => {
    if (deliveryAddress.trim() === "") {
      toast.warning("Please provide a delivery address before checkout.");
    } else {
      const receipt = generateReceipt(); // Generate the receipt

      // Display the receipt using toast notification
      toast.success("Checkout successful! Thank you for your purchase!");
      toast.info("Receipt will be displayed below.");

      // Update the UI with the receipt
      setReceipt(receipt); // Add this line to store the receipt in state
      setCartItems({});
      setTotalCartItems(0);
      setTotalPrice(0);
    }
  };

  return (
    <div>
      <div className="cart-container">
        <h2>Cart</h2>
        <div className="cart">
          {Object.entries(cartItems).map(([productId, quantity]) => (
            <div key={productId} className="cart-item">
              <p>
                {
                  products.find((product) => product.product_name === productId)
                    .product_name
                }
              </p>
              <p>
                Price: Ksh{" "}
                {
                  products.find((product) => product.product_name === productId)
                    .unit_price
                }
              </p>
              <p>Quantity: {quantity}</p>
              <button onClick={() => handleRemoveFromCart(productId)}>
                Remove
              </button>
            </div>
          ))}
        </div>
        {/* Display the total amount and total number of items */}
        <div className="cart-summary">
          <p>Total Items: {totalCartItems}</p> {/* Add this line */}
          <p>Total Price: Ksh {totalPrice}</p>
        </div>
        {/* Display delivery address input */}
        <input
          type="text"
          placeholder="Enter Delivery Address"
          value={deliveryAddress}
          onChange={(e) => handleDeliveryChange(e.target.value)}
        />
        {/* Display checkout button */}
        <button onClick={handleCheckout}>Checkout</button>
      </div>
      {/* Display receipt if available */}
      {receipt && (
        <div className="receipt-container">
          <h2>Receipt</h2>
          <p>
            <strong>Delivery Address:</strong> {receipt.deliveryAddress}
          </p>
          <ul>
            {Object.keys(receipt.items).map((itemKey) => (
              <li key={itemKey}>
                {
                  products.find((product) => product.product_name === itemKey)
                    .product_name
                }
                {" - Quantity: "}
                {receipt.items[itemKey]}
              </li>
            ))}
          </ul>
          <p>
            <strong>Total Items:</strong> {receipt.totalItems}
          </p>
          <p>
            <strong>Total Price:</strong> Ksh {receipt.totalPrice}
          </p>
        </div>
      )}

      <h2>Products</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <Card
            key={index} // or use product.id if available
            product_name={product.product_name}
            product_description={product.product_description}
            product_full_image={product.product_full_image}
            unit_price={product.unit_price}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
      {/* <div> <Footer /></div>  */}
    </div>
  );
}

export default ProductList;
//ffgjjfhjh
