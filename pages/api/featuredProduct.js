const featured_products = {
  "products": [
    {
      "name": "Apple AirPods Pro",
      "description": "Wireless earbuds with active noise cancellation and customizable fit.",
      "price": 249,
      "image": "https://th.bing.com/th?id=OSK.HEROhetvkLLmRhCGFiA3-9svwL3DOpE9exoyOMGPrVmoASI&w=472&h=280&c=1&rs=2&o=6&pid=SANGAM"
    },
    {
      "name": "Lenovo Ideapad 3",
      "description": "Budget laptop with decent performance and battery life.",
      "price": 89,
      "image": "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/dafa5f9d-e334-42b0-9b57-40432513e838._CR0,0,1200,628_SX430_QL70_.jpg"
    },
    {
      "name": "Fitbit Charge 5",
      "description": "Fitness tracker with heart rate monitoring and GPS.",
      "price": 179,
      "image": "https://th.bing.com/th/id/OIP.9RrDGIVqkhvLlbQTriwNogHaHa?pid=ImgDet&rs=1"
    },
    {
      "name": "Galaxy S23 Ultra",
      "description": "Flagship smartphone with advanced features and high-end performance.",
      "price": 249,
      "image": "https://images.samsung.com/is/image/samsung/p6pim/in/2302/gallery/in-galaxy-s23-s918-sm-s918bzgcins-thumb-534863401"
    }
  ]
};

export default function handler(req, res) {
  res.status(200).json(featured_products);
}
