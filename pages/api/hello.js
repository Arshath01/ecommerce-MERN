import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://sample:sample123@cluster0.x9yzawi.mongodb.net/?retryWrites=true&w=majority';

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { name, image, description, price } = req.body;

      // Connect to MongoDB
      const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      await client.connect();
      const db = client.db('emart');
      const collection = db.collection('orders');

      // Process the received data and store it in the database
      const newData = {
        name,
        image,
        description,
        price,
      };

      await collection.insertOne(newData);
      console.log("order placed")
      // Close the MongoDB connection
      await client.close();

      res.status(200).json({ message: 'Data stored successfully' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'An error occurred' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
