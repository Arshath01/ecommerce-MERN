import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export let productArray= [];

const ProductCard = ({ product }) => {
  const { title, thumbnail, description, price } = product;

  const handleAddToCart = () => {
    const productToAdd = {
      name: title,
      image: thumbnail,
      description: description,
      price: price,
      count: 1 // Initialize count as 1 for the added product
    };
    productArray.push(productToAdd);
  };

  return (
    <div className='card'>
      <img src={thumbnail} className='card-img-top' alt={name} />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p className='card-text'>{description}</p>
        <button onClick={handleAddToCart} className='btn btn-primary'>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default function DisplayProduct() {
  const router = useRouter();
  const data = router.query;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      const apiUrl = `https://dummyjson.com/products/category/${data.dynamic}`;
      fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
          setProducts(data.products);
        })
        .catch(error => console.log(error));
    }
  }, [data]);

  return (
    <>
      <div className="d-flex justify-content-between">
        <h3 className="container my-4">Categorized <span className="text-primary">Products</span></h3>
        <Link href="../cartDisplay/cart" className="cart-icon">
          <span className="material-symbols-outlined p-2 m-3">shopping_cart</span>
        </Link>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product, index) => (
            <div className="col" key={index}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      {/* <h4 className="container mt-4">Cart:</h4>
      <div className="container">
        <ul>
          {productArray.map((product, index) => (
            <li key={index}>{product.name}</li>
          ))}
        </ul>
      </div> */}
    </>
  );
}
