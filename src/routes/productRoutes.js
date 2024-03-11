//routes/productRoutes.js

import express from "express"; 
import * as productController from '../controllers/productController.js';

const router = express.Router();

//Ruta para obtener todos los productos existentes
router.get('/products', productController.getAllProducts);

//Ruta para obtener un solo producto de la bd
router.get('/products/:id', productController.getProductById);

//Ruta para crear un producto nuevo
router.post('/newproduct', productController.createNewProduct);

//Ruta para editar un producto ya existente
router.put('/editproduct/:id', productController.updateProduct);

//Ruta para eliminar un producto existente
router.delete('/delproduct/:id', productController.deleteProduct);

export default router;