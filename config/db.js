const mongoose=require('mongoose');


function connectToDB(){
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log('Connecting to database')
    })
}

module.exports=connectToDB;