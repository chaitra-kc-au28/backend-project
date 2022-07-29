const mongoose=require('mongoose');

//creating database
mongoose.connect('mongodb://localhost:27017/user');

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});