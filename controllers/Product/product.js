const product = require('../../db/models/product');
//GET '/product'
const getAllProducts = async (req, res) => {
    try {
        const product = await product.findAll();
        res.send(product);
    } catch (err) {
        console.log(err)
    }
};

//GET '/product/:name'
const getProductById = async (req, res) => {
    try {
        const product = await product.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(product[0]);
    } catch (err) {
        console.log(err);
    }
};


//POST '/product'
const createProduct = async (req, res) => {
    try {
        await product.create(req.body);
        res.json({
            "message":"Product Created"
        });
    } catch (err) {
        console.log(err);
    }
};

const updateProduct = async (req, res) => {
    try {
        await product.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Updated"
        });
    } catch (err) {
        console.log(err);
    }
}


//DELETE '/product/:name'
const deleteProductById = async (req, res) => {
    try {
        await product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}

module.export = { 
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProductById
};