import { useState, useEffect } from "react";
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [suggestedProducts, setSuggestedProducts] = useState([]);
  const style = isOpen ? "block" : "none";

  const productCategories = [
    { name: "smartphones" },
    { name: "laptops" },
    { name: "fragrances" },
    { name: "skincare" },
    { name: "groceries" }
  ];

  const Isopen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Fetch suggested products based on the input value
    const filteredProducts = productCategories.filter((category) =>
      category.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSuggestedProducts(filteredProducts);
  }, [searchValue]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  return (
    <>
      <nav className="mx-3 pt-2" id="header">
        <div className="d-flex my-2">
          <h5>Emart</h5>
          <span
            className="material-symbols-outlined my-auto ms-auto me-2"
            id="menu_header"
            onClick={Isopen}
          >
            menu
          </span>
          <span
            className="material-symbols-outlined text-light m-2"
            style={{ display: style }}
            id="close_header"
            onClick={Isopen}
          >
            close
          </span>
          <ul
            className={`list-unstyled my-auto ms-auto rounded text-light ${isOpen ? 'd-block' : 'd-none'} ${isOpen ? 'mobile-menu' : ''}`}
            id="ul_header"
          >
            <li>Home</li>
            <li><Link href="../../orderPage/orders" style={{textDecoration:"none"}}>Orders</Link></li>
          </ul>
        </div>

        <div className="d-flex">
          <div className="d-flex w-100 rounded bg-light border">
            <span className="material-symbols-outlined p-1 border-end px-2 my-auto">search</span>
            <input
              type="text"
              placeholder="Search"
              className="bg-light w-100 px-3 py-auto rounded"
              id="main_input"
              value={searchValue}
              onChange={handleInputChange}
            />
          </div>

          <Link href={`../cartDisplay/cart`}>
            <span className="material-symbols-outlined p-2">shopping_cart</span>
          </Link>
        </div>

        {searchValue && (
          <div className="suggested-products">
            {suggestedProducts.map((product, index) => (
              <div key={index} className="product-item">
                <Link href={`./products/${product.name}`}>{product.name}</Link>
              </div>
            ))}
          </div>
        )}
      </nav>
      <style jsx>{`
        /* Custom styles for mobile menu */
        @media (max-width: 576px) {
          .mobile-menu {
            background-color: #000;
            position: absolute;
            width: 100%;
            z-index: 99;
            padding: 10px;
            top: 55px;
            left: 0;
          }
          .mobile-menu li {
            margin-bottom: 10px;
          }
        }
      `}</style>
    </>
  );
}
