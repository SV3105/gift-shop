const express = require('express');
const multer = require('multer');
const CustomDesign = require('../models/customDesign');
const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage });

// POST: Submit custom design
router.post('/submit', upload.single('image'), async (req, res) => {
    try {
        const { userId, idea, notes } = req.body;
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

        const customDesign = new CustomDesign({ userId, idea, notes, imageUrl });
        await customDesign.save();

        res.status(201).json({ message: 'Custom design submitted successfully!', data: customDesign });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET: Fetch all custom design submissions
router.get('/submissions', async (req, res) => {
    try {
        const submissions = await CustomDesign.find();
        res.status(200).json(submissions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
