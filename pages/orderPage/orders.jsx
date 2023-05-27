import React, { useEffect, useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the backend API
    const fetchData = async () => {
      try {
        const response = await fetch('../api/ordersList');
        const data = await response.json();
        setOrders(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Order Page</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {orders.length > 0 ? (
            <div className="orders-container">
              {orders.map((order) => (
                <div className="order-card" key={order._id}>
                  <img src={order.image} alt={order.name} className="order-image" />
                  <div className="order-details">
                    <h2>{order.name}</h2>
                    <p>{order.description}</p>
                    <p>Price: ${order.price}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No orders found.</p>
          )}
        </>
      )}
      <style jsx>{`
        .orders-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }

        .order-card {
          width: 300px;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .order-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
          margin-bottom: 16px;
        }

        .order-details {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Orders;
