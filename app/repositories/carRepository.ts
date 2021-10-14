import db from '../../models'


const getCars = async () => {
  const cars = await db.Car.findAll({
    include:  [db.Engine]
  }); 
  console.log(cars, ' cars found');

  return cars;
}


module.exports = {
  getCars
}