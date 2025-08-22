import express from 'express'
import connectDb from './config/db.js' 
import dotenv from 'dotenv'
import mongoose from "mongoose";
import cookieParser from 'cookie-parser'
dotenv.config()


import cors from "cors"
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js';
import orderRoutes from './routes/orderRoutes.js';


let port = process.env.PORT || 6000
let app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
   origin:["http://localhost:5173","http://localhost:5174"],
   credentials:true
}))
const SubscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  subscribedAt: { type: Date, default: Date.now },
});

const Subscriber = mongoose.model('Subscriber', SubscriberSchema);

// Route
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email || !/^[^ ]+@[^ ]+\.[a-z]{2,}$/i.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  try {
    // Check if already subscribed
    const exists = await Subscriber.findOne({ email });
    if (exists) {
      return res.status(400).json({ error: 'Email already subscribed.' });
    }

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
    res.json({ message: 'Successfully subscribed!' });
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
});


app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
app.use("/api/product",productRoutes)
app.use("/api/cart",cartRoutes)
app.use("/api/order",orderRoutes)




app.listen(port,()=>{
    console.log("Hello from server")
    connectDb()
})