//name, price, quantity, description,offer, productPictures, category, createdBy of a product.

const mongoose = require('mongoose');

const Product = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    },
    description : {
        type : String
    },
    offer : {
        type : String
    },
    category : {
        type : String,
        required : true
    },
    // createdBy : {
    //     type : mongoose.Schema.Types.ObjectId
    // },
    createdAt :{
        type : Date,
        default : ()=>{
            return Date.now()
        },
        immuted : true
    },
    createdAt :{
        type : Date,
        default : ()=>{
            return Date.now()
        }
    }
});

module.exports = mongoose.model('products',Product);