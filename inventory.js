const express = require('express');
const router = express.Router();

// Mock database for inventory
let inventory = [];

// GET /inventory - Retrieve all inventory
router.get('/inventory', (req, res) => {
    res.json(inventory);
});

// GET /inventory/:productId - Retrieve inventory by product ID
router.get('/inventory/:productId', (req, res) => {
    const productId = req.params.productId;
    const product = inventory.find(item => item.id === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// POST /inventory - Add new inventory item
router.post('/inventory', (req, res) => {
    const newItem = req.body; // Expecting item details in request body
    inventory.push(newItem);
    res.status(201).json(newItem);
});

// PUT /inventory/:productId - Update inventory quantity
router.put('/inventory/:productId', (req, res) => {
    const productId = req.params.productId;
    const { quantity } = req.body;
    const product = inventory.find(item => item.id === productId);

    if (product) {
        product.quantity = quantity;
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// POST /transaction - Record a transaction
router.post('/transaction', (req, res) => {
    const transaction = req.body; // Expecting transaction details in request body
    // Here, you would typically add logic to process the transaction
    res.status(201).json(transaction);
});

module.exports = router;
