import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Buy() {
  const router = useRouter();
  const { name, image, description, price } = router.query;
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handlePayment = () => {
    // Validate the payment details
    if (amount.trim() === '' || cardNumber.trim() === '' || expiryDate.trim() === '' || cvv.trim() === '') {
      alert('Please fill in all the payment details.');
      return;
    }

    // Convert the amount to a number
    const enteredAmount = parseFloat(amount);
    const productPrice = parseFloat(price);

    // Check if the entered amount matches the product price
    if (enteredAmount !== productPrice) {
      alert('The entered amount does not match the product price.');
      return;
    }

    // Construct the product details object
    const productDetails = {
      name,
      image,
      description,
      price,
      amount,
      cardNumber,
      expiryDate,
      cvv,
    };

    // Send a POST request to the API endpoint with the product details
    fetch('../api/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the API response
        console.log(`Payment successful for "${name}".`);
        console.log(`Product "${name}" ordered. Ready for packaging.`);
        router.push('/');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="container">
      <h1>Buy Product</h1>
      <div className="card">
        <div className="row">
          <div className="col-md-6">
            <img src={image} alt={name} className="card-img-top" style={{ width: '100%' }} />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <h6 className="card-subtitle mb-2 text-muted">Price: {price}</h6>
              <form>
                <div className="mb-3">
                  <label htmlFor="amount" className="form-label">
                    Amount
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="cardNumber" className="form-label">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="expiryDate" className="form-label">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="expiryDate"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="cvv" className="form-label">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cvv"
                    value={cvv}
                    onChange={(e) => setCVV(e.target.value)}
                  />
                </div>
                <button type="button" className="btn btn-primary" onClick={handlePayment}>
                  Buy Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
