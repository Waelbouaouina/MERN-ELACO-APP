const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ProfileModel = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    tel: "String",
    country: "String",
    city: "String",
    postalcode :"String",
    address: "String",
    bio: "String",
    
}, 
{
    timestamps: true

})

module.exports = mongoose.model("profiles", ProfileModel);