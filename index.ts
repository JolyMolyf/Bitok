import express from 'express'; 
import db from './models';
import { people } from './seeders/people'


const app = express() 

const PORT = process.env.PORT || 3000; 

const createPeople = () => {
  people.map(person => {
    db.Person.create(person)
  })
}


// db.Client.findAll().then((res:any) => {
//   console.log(res);
// })


db.sequelize.sync().then(()=>{
  app.listen(PORT, () => { 
    console.log('App is listening on Port: ', PORT)
  })
});