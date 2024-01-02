import OrderTicket from "../models/orderTicket.model.js";
import OrderDetail from "../models/orderDetail.model.js";

import { TOKEN_SECRET } from "../config.js";
import jwt from "jsonwebtoken";




export const getOrders = async (req, res) => {
    try {
      const orders = await OrderTicket.find();
      res.json(orders);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };


  
  export const createOrder = async (req, res) => {
  const { token } = req.cookies;
        jwt.verify(token, TOKEN_SECRET, async (error, user) => {
            const user_id=user.id
            const order = req.body;
            const products = order.products;
            try {
                const newOrder = new OrderTicket({
                  userId: user_id, 
                  customersId: order.customersId, 
                  orderType: order.orderType, 
                  table: order.table, 
                  numberPerson: order.numberPerson,
                });
                await newOrder.save();

                products.forEach(async  product => {
                  product.orderTicketsId = newOrder._id;
                  const newOrderDetail = new OrderDetail(product);
                  await newOrderDetail.save();
                });

                res.json(newOrder);
            } catch (error) {
              return res.status(500).json({ message: error.message });
            }

        });
    
  };
  
  export const deleteOrder = async (req, res) => {
    const orderId = req.params.id;
    try {
      const deletedOrder = await OrderTicket.findOne({ _id: orderId })
      if (!deletedOrder) return res.status(404).json({ message: "Product no encontrado" })

      await OrderDetail.deleteMany({ orderTicketsId: orderId })
      await OrderTicket.deleteOne({ _id: orderId });
      
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }

  };
  
  export const updateOrder= async (req, res) => {
    // try {
    //   const { name, unit, price, category, barcode, description, stock, stock_minimun, image } = req.body;
    //   const productUpdated = await Product.findOneAndUpdate(
    //     { _id: req.params.id },
    //     { name, unit, price, category, barcode, description, stock, stock_minimun, image },
    //     { new: true }
    //   );
    //   return res.json(productUpdated);
    // } catch (error) {
    //   return res.status(500).json({ message: error.message});
    // }
  };
  
  export const getOrder = async (req, res) => {
    // try {
    //   const product = await Product.findById(req.params.id);
    //   if (!product) return res.status(404).json({ message: "product not found" });
    //   return res.json(product);
    // } catch (error) {
    //   return res.status(500).json({ message: error.message });
    // }
  };