const database = require('../../db/models/');
//GET '/product'
export const getAllProducts = async (req, res) => {
    try {
        const product = await Product.findAll();
        res.send(product);
    } catch (err) {
        console.log(err)
    }
};

//GET '/product/:name'
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findAll({
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
export const createProduct = async (req, res) => {
    try {
        await Product.create(req.body);
        res.json({
            "message":"Product Created"
        });
    } catch (err) {
        console.log(err);
    }
};

// Update product by id
export const updateProduct = async (req, res) => {
    try {
        await Product.update(req.body, {
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
export const deleteProductById = async (req, res) => {
    try {
        await Product.destroy({
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

