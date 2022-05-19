///////////////Creating the Schema ////////////////////////////////////////////////////
const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const UserSchema = new Schema ({
  //set the schema name here is required
    name: {
        type: String,
        required: true,
        },
    lastname: String,
    age: Number,
    
});

module.exports = mongoose.model ('User', UserSchema)

