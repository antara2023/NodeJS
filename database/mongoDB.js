import mongoose from 'mongoose';

const connetDB = async()=>{
    try {
        const {connection} = await mongoose.connect(
        'mongodb+srv://antaranitdgp11:iamalearner1@cluster0.wqvijmq.mongodb.net/user_db?retryWrites=true&w=majority&appName=AtlasApp'
        )
        if (connection) {
            console.log(`connected to database: ${connection.host}`)
        }
    }
    catch(e){
        console.log(e)
    }
}
export default connetDB 