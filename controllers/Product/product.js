//GET '/product'
const getAllProducts = (req, res, next) => {
    res.json({message: "GET all Products"});
};

//POST '/product'
const newProduct = (req, res, next) => {
    res.json({message: "POST new Product"});
};

//DELETE '/products'
const deleteAllProducts = (req, res, next) => {
    res.json({message: "DELETE all Products"});
};

//GET '/product/:name'
const getOneProduct = (req, res, next) => {
    res.json({message: "GET 1 Product"});
};


//DELETE '/product/:name'
const deleteOneProduct = (req, res, next) => {
    res.json({message: "DELETE 1 Product"});
};

//export controller functions
module.exports = {
    getAllProducts, 
    newProduct,
    deleteAllProducts,
    getOneProduct,
    deleteOneProduct
};