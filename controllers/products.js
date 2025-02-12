// Product Controller
const Product = require('../models/Product');

const productController = {
    index: async (req, res) => {
        try {
            const products = await Product.find();
            res.status(200).json({
                status: true,
                data: products,
                method: req.method,
                url: req.originalUrl
            });
        } catch (error) {
            res.status(500).json({ success: false, message: "Terjadi kesalahan server", error: error.message });
        }
    },

    show: async (req, res) => {
        try {
            const { id } = req.params;
            const product = await Product.findById(id);
            if (!product) return res.status(404).json({ success: false, message: "Produk tidak ditemukan" });
            res.status(200).json({ success: true, data: product, message: "Data berhasil didapat" });
        } catch (error) {
            res.status(500).json({ success: false, message: "Terjadi kesalahan server", error: error.message });
        }
    },

    store: async (req, res) => {
        try {
            const product = await Product.create(req.body);
            res.status(201).json({ success: true, data: product, message: "Produk berhasil ditambahkan" });
        } catch (error) {
            res.status(400).json({ success: false, message: "Gagal menambahkan produk", error: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const { id } = req.params;
            const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
            if (!product) return res.status(404).json({ success: false, message: "Produk tidak ditemukan" });
            res.status(200).json({ success: true, data: product, message: "Produk berhasil diperbarui" });
        } catch (error) {
            res.status(500).json({ success: false, message: "Terjadi kesalahan server", error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const product = await Product.findByIdAndDelete(id);
            if (!product) return res.status(404).json({ success: false, message: "Produk tidak ditemukan" });
            res.status(200).json({ success: true, data: product, message: "Produk berhasil dihapus" });
        } catch (error) {
            res.status(500).json({ success: false, message: "Terjadi kesalahan server", error: error.message });
        }
    }
};

module.exports = productController;
