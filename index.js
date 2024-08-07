const express=require('express');
const app=express();
const nodemon=require('nodemon');
const mongoose=require('mongoose');
const cors=require('cors');
const port=4002;
const Usersdata=require('./model/schema');
app.use(express.json());
app.use(cors({
  origin:["https://frontend-client-cars.vercel.app"],
  methods:["GET","POST", "PUT", "DELETE"],
  credentials:true
}));
app.use(cors());
const url = 'mongodb+srv://Devadasu:Devadasu1234@cluster0.3n7oap2.mongodb.net/CarEnquiries?retryWrites=true&w=majority&appName=Cluster0'; 
mongoose.connect(url)
  .then(() => {
    console.log('Connected successfully to MongoDB ');
      })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });
  app.post('/userenquirydata',async (req,res)=>{
    const {Name,carname,phonenumber,address,carvarient}=req.body;
    try{
         const newdata=new Usersdata({
            Name:Name,
            carname:carname,
            phonenumber:phonenumber,
            address:address,
            carvarient:carvarient
           });
           await newdata.save();
           return res.send('My executive will callback shortly');
    }catch(err){
        console.error('Error saving data:', err);
        res.status(500).send('Error saving data');
    }
  })
  app.get('/',(req,res)=>{
    res.json('heeloooo world')
  })
  app.listen(port,()=>console.log(`server running on ${port}`))
