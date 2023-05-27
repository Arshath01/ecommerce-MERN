import React, { useEffect, useState } from 'react';
import Cart from './cart';

export let myArray = [];

const FeaturedProduct = ({ name, image, description, price }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    const existingProduct = myArray.find((product) => product.name === name);

    if (existingProduct) {
      existingProduct.count += 1; // Increment count if product already exists
    } else {
      const product = {
        name: name,
        image: image,
        description: description,
        price: price,
        count: 1 // Initialize count as 1 for the added product
      };

      myArray.push(product);
    }

    setAddedToCart(true);
    console.log(myArray);

    setTimeout(() => {
      setAddedToCart(false); // Reset addedToCart state to false after 2 seconds
    }, 2000);
  };

  console.log("myarray", myArray); // Log the updated array with product details

  return (
    <div id="featured-wrap" className="product rounded text-dark border bg-light p-2">
      <img src={image} id="images_featured" className="rounded" alt="" />
      <div className="m-2">
        <h4>{name}</h4>
        <p id="description" className="w-75">{description}</p>
        <h6 className="ms-1">${price}</h6>
        {addedToCart ? (
          <p className="text-success">Product added to cart!</p>
        ) : (
          <button className="btn btn-primary w-100 mt-2" onClick={handleAddToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('/api/featuredProduct')
      .then(res => res.json())
      .then(data => {
        console.log(data.products);
        setProductData(data.products);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <h3 className="container my-4">Featured <span className="text-primary">Products</span></h3>
      <div className="d-flex  container p-2 gap-1 w-100" id="featured_product">
        {productData && productData.length > 0 ? (
          productData.map((product) => (
            <div key={product.id} className="  col-lg-4 col-md-6">
              <FeaturedProduct
                name={product.name}
                image={product.image}
                price={product.price}
                description={product.description}
              />
            </div>
          ))
        ) : (
          <p>No featured products found.</p>
        )}
      </div>
      <style jsx>{`
        @media (min-width: 576px) {
          /* Desktop version */
          .container-fluid {
            display: flex;
            // flex-wrap: wrap;
            gap: 0rem;
          }

          .col-lg-4 {
            flex: 0 0 calc(33.333% - 18rem);
            max-width: calc(33.333% - 2rem);
          }
        }

        @media (max-width:716px) {
          /* Mobile version */
          .container {
            flex-direction: column;
            display:flex-wrap;
          }

          // .product {
          //   min-width:300px !important;
          // }
        }
      `}</style>
    </>
  );
};

export default FeaturedProducts;
