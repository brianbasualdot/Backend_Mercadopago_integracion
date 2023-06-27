export const PORT = 3000

import { config } from "dotenv";
config();

export const MERCADOPAGO_API_KEY = process.env.MERCADOPAGO_API_KEY;