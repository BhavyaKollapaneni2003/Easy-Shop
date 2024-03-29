import dotenv from 'dotenv'
import cors from 'cors'
import Stripe from 'stripe'
dotenv.config()
import express from 'express'
import path from 'path'
import dbConnect from '../config/dbConnect.js'
import { globalErrhandler, notFound } from '../middlewares/globalErrHandler.js'
import brandsRouter from '../routes/brandsRouter.js'
import categoriesRouter from '../routes/categoriesRouter.js'
import colorRouter from '../routes/colorRouter.js'
import orderRouter from '../routes/ordersRouter.js'
import productsRouter from '../routes/productsRoute.js'
import reviewRouter from '../routes/reviewRouter.js'
import userRoutes from '../routes/usersRoute.js'
import Order from '../model/Order.js'
import couponsRouter from '../routes/couponsRouter.js'

//db connect
dbConnect()
const app = express()
//cors
app.use(cors())
//Stripe webhook
//stripe instance
const stripe = new Stripe(process.env.STRIPE_KEY)

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret =
  'whsec_72eebdf73532183b006a0d0cd27bc25eefb9e9acbada4d2398ccce8c6becadeb'

app.post(
  '/webhook',
  express.raw({ type: 'application/json' }),
  async (request, response) => {
    const sig = request.headers['stripe-signature']

    let event

    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret)
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`)
      return
    }
    if (event.type === 'checkout.session.completed') {
      //update the order
      const session = event.data.object
      const { orderId } = session.metadata
      const paymentStatus = session.payment_status
      const paymentMethod = session.payment_method_types[0]
      const totalAmount = session.amount_total
      const currency = session.currency
      //find the order
      const order = await Order.findByIdAndUpdate(
        JSON.parse(orderId),
        {
          totalPrice: totalAmount / 100,
          currency,
          paymentMethod,
          paymentStatus,
        },
        {
          new: true,
        }
      )
    } else {
      return
    }
    response.send()
  }
)

//pass incoming data
app.use(express.json())
//url encoded
app.use(express.urlencoded({ extended: true }))

//server static files
app.use(express.static('public'))
//routes
//Home route
app.get('/', (req, res) => {
  res.sendFile(path.join('public', 'index.html'))
})
app.use('/EasyShop/users/', userRoutes)
app.use('/EasyShop/products/', productsRouter)
app.use('/EasyShop/categories/', categoriesRouter)
app.use('/EasyShop/brands/', brandsRouter)
app.use('/EasyShop/colors/', colorRouter)
app.use('/EasyShop/reviews/', reviewRouter)
app.use('/EasyShop/orders/', orderRouter)
app.use('/EasyShop/coupons/', couponsRouter)
//err middleware
app.use(notFound)
app.use(globalErrhandler)

export default app
