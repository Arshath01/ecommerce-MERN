import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { myArray } from '../components/LandingPage/FeaturedProducts';
import { productArray } from '../products/[dynamic]';

const Cart = () => {
  const [cartDetails, setCartDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const globalArray = myArray.concat(productArray);

  useEffect(() => {
    // Calculate the count for each unique product
    const calculateCount = () => {
      const productMap = new Map();
      const uniqueProducts = [];

      for (const product of globalArray) {
        const existingProduct = productMap.get(product.name);

        if (existingProduct) {
          existingProduct.count += 1; // Increment count if product already exists
        } else {
          productMap.set(product.name, { ...product, count: 1 }); // Add product to map with count 1
          uniqueProducts.push(product);
        }
      }

      return uniqueProducts;
    };

    const uniqueProducts = calculateCount();
    setCartDetails(uniqueProducts);
    setIsLoading(false);
  }, [productArray, myArray]);

  const handleRemoveFromCart = (productName) => {
    const updatedCart = cartDetails.map((item) => {
      if (item.name === productName && item.count > 0) {
        item.count -= 1; // Reduce count if product matches and count is greater than 0
      }
      return item;
    });

    setCartDetails(updatedCart);
  };

  const handleBuy = (productName) => {
    const trimmedCart = cartDetails.find((item) => item.name.includes(productName));
    const updatedCart = cartDetails.filter((item) => item.name !== trimmedCart.name);
    setCartDetails(updatedCart);
    console.log(trimmedCart); // Log trimmedCart data

    // Navigate to ProductBuying page with trimmedCart data
    const queryParams = new URLSearchParams(trimmedCart).toString();
    router.push(`./buy?${queryParams}`);
  };

  return (
    <div className="container">
      <div className="card mb-4">
        <div className="card-body">
          <h4 className="card-title">My Cart</h4>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          cartDetails.map((item) => (
            <div className="col" key={item.id}>
              <div className="card h-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                  onLoad={() => setIsLoading(false)}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Price: ${item.price} | Count: {item.count}
                  </h6>
                  <button className="btn btn-primary " onClick={() => handleRemoveFromCart(item.name)}>
                    Remove
                  </button>
                  {item.count > 0 && (
                    <button className="btn btn-primary ms-2 w-50" onClick={() => handleBuy(item.name)}>
                      Buy
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
