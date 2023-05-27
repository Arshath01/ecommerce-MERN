import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://sample:sample123@cluster0.x9yzawi.mongodb.net/?retryWrites=true&w=majority';

export default async (req, res) => {
  try {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    const database = client.db('emart');
    const collection = database.collection('orders');
    const orders = await collection.find().toArray();
    await client.close();

    res.status(200).json(orders);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
};
