import { Router } from 'express';
import { createOrder , receiveWebhook} from ".../controllers/payment.controller.js";

const router = Router();


router.get("/create-order", createOrder);

router.post("/webhook", receiveWebhook);

router.get('/success', (req, res) => res.send('success'));

// router.get('/failure', (req, res) => res.send('failure'));

// router.get('/pending', (req, res) => res.send('pending'));

export default router;