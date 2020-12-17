import mongoose from 'mongoose';
mongoose.connect("mongodb+srv://erickpc:123456789abc@cluster0.iwufp.mongodb.net/test")
.then(db => console.log('database us connected'))
.catch(err => console.log(err));