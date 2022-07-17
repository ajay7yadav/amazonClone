const Product = require('../models/product_Schema');
exports.create = async(req, res)=>{
    const bodyObj = {
        name : req.body.name,
        price : req.body.price,
        quantity : req.body.quantity,
        description : req.body.description,
        offer : req.body.offer,
        category : req.body.category
    };
    try{
        const products = await Product.create(bodyObj);
        res.status(201).send(products);
    }catch(err){
        console.log(err);
        res.status(500).send({
            message : "Internal error  !"
        });
    }
}
exports.updatePro = async(req, res)=>{
    const productId = req.params.id;
    const bodyObj = {
        name : req.body.name,
        price : req.body.price,
        quantity : req.body.quantity,
        description : req.body.description,
        offer : req.body.offer,
        category : req.body.category
    };
    try{
        const product = await Product.updateOne({_id : productId}, {$set : bodyObj});
        if(!product){
            res.status(404).send({
                message : "Product id does not exits  !"
            });
            return;
        }
        
        res.status(200).send({
            message : "Product updated "
        });
    }catch(err){
        console.log(err.message);
        res.status(500).send({
            message : "Internal error  !"
        });
    }
}