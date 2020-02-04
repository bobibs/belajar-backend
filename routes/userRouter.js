// Import Module
const express = require('express');
const router = express.Router();
const { userControllers } = require('../controllers');

// Create Store -- API (users/create-store)
router.post('/create-store', userControllers.userCreateStore);

// Get Data Store -- API (users/get-store)
router.get('/get-store', userControllers.userGetStore);

// Update Data Store -- API (users/update-store)
router.put('/update-store', userControllers.userUpdateStore);

// Delete Data Store & Product -- API (users/delete-data)
router.delete('/delete-data/:id', userControllers.userDeleteData);

// Create Data Product -- API (users/add-product)
router.post('/add-product', userControllers.userAddProduct);

module.exports = router;
