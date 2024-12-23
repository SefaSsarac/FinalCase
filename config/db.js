const mongoose = require('mongoose')
async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected');
    }catch(e){
        console.log(e,'mongoERROR')
    }
}

module.exports = { connectDB }