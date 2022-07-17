const controller = require('../controllers/product_C');
const mid = require('../middlewares/verifyJWT');

module.exports = (ap)=>{

    ap.post('/amazon/v1/products/create',[mid.token,mid.admin],controller.create);

    //ap.post('/amazon/v1/users/signin',controller.signIn);

}