const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true },
    quantity: { type: Number, required: true },
    minThreshold: { type: Number, required: true },
    maxCapacity: { type: Number, required: true },
    lastRestockDate: { type: Date, required: true },
    location: { type: String, required: true },
},{
    timestamps: true
});

module.exports = mongoose.model('Inventory', inventorySchema);
