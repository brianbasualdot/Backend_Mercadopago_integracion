import  Express  from 'express';
import  paymentRoutes  from './routes/payment.routes.js';
import morgan from 'morgan';

const app = Express();

app.use(morgan('dev'))

app.use(paymentRoutes);

app.use(express.static(path.resolve("src/public")));

app.listen(3000);
console.log("Server on port", 3000);