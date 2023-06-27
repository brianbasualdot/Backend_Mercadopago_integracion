import mercadopago from "mercadopago";
import { MERCADOPAGO_API_KEY } from "../config.js";

export const createOrder = async(req, res) => {
    mercadopago.configure({
        access_token: MERCADOPAGO_API_KEY,
    });

    const result = await mercadopago.preferences.create({
        items: [
            {
            title: "Notebook Asus",
            unit_price: 2000,
            currency_id: "ARG",
            quantity: 1,
            },
        ],
        back_urls: {
            succes: "http://localhost:3000/success",
            failure: "http://localhost:3000/failure",
            pending: "http://localhost:3000/pending",
        },
        notification_url: "https://localhost:3000/webhook",
      back_urls: {
        success: "http://localhost:3000/success",
        },
    });
    
    console.log(result);
    res.json({ message: "Payment creted" });
    res.json(result.body);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  
  };


export const receiveWebhook = async (req, res) => {
    try {
      const payment = req.query;
      console.log(payment);
      if (payment.type === "payment") {
        const data = await mercadopage.payment.findById(payment["data.id"]);
        console.log(data);
      }
  
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };