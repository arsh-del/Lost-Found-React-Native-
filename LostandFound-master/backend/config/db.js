const mongose = require('mongoose');

const connectDB = async () =>{
    try{
        const conn = await mongose.connect("mongodb://localhost:27017/lostandfound",{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex:true
        })
        console.log('Db connected'+ conn.connection.host)
    }
    catch (e) {
        console.error('Error:'+ e.message)
        process.exit(1)
    }
};
module.exports = connectDB;
