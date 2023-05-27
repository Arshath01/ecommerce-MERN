import React from 'react';
import Link from 'next/link';

const CategoryCard = ({ name, image, description, data }) => {
  return (
    <div className="card h-100">
      <img src={image} className="card-img-top" alt={name} style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p>{data}</p>
        </div>
        <div className="mt-2">
          <Link href={`./products/${name}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

const CategoryProducts = () => {
  const productCategories = [
    {
      name: "laptops",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe1IHr3tlhV4PYqGrg3AV2KhLgRyN121vTWg&usqp=CAU"
    },
    {
      name: "smartphones",
      image: "https://m.media-amazon.com/images/I/71Ftzmh3XWL.AC_UF894,1000_QL80_FMwebp.jpg"
    },
   
    {
      name: "fragrances",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7KDkvdERXvjBNfsooSco02WW53mX4wWuww&usqp=CAU"
    },
    {
      name: "skincare",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRy6MGS8RVIWnX8GmxE5X1XyE2Yf87133nzXlbDfGFdzEqoZqC47bs7NNW63AwZdO96ptcUM8&usqp=CAc"
    },
    {
      name: "groceries",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2OARE_Z8mJy1ge612zCG7QoBlPxPQwTumug&usqp=CAU"
    },
    // Add more categories with their respective images
  ];

  return (
    <>
      <h3 className="container my-4">Featured <span className="text-primary">Products</span></h3>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {productCategories.map(category => (
            <div className="col" key={category.name}>
              <CategoryCard
                name={category.name}
                image={category.image}
                description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.${category.name}`}
                data={`Category: ${category.name}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryProducts;
