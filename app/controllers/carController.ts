import {Request, Response, NextFunction} from 'express';
import {StatusCodes} from 'http-status-codes';
const carRepository = require('../repositories/carRepository');


const getAllCars = async (req:Request, res:Response, next:NextFunction) => {
  const cars = await carRepository.getCars(); 
  console.log(cars);
  res.json(cars)
}




export default {
  getAllCars 
}