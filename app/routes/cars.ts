import express from 'express';
import carController from '../controllers/carController'
const router = express.Router();



router.get('/', carController.getAllCars)  


module.exports = router