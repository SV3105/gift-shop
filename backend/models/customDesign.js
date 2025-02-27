const mongoose = require('mongoose');

const customDesignSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    idea: { type: String, required: true },
    notes: { type: String },
    imageUrl: { type: String },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CustomDesign', customDesignSchema);
