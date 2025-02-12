// Order Controller
const Order = require('../models/Order');

const orderController = {
    index: async (req, res) => {
        try {
            const orders = await Order.find().populate('product').populate('user');
            res.status(200).json({
                status: true,
                data: orders,
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
            const order = await Order.findById(id).populate('product').populate('user');
            if (!order) return res.status(404).json({ success: false, message: "Pesanan tidak ditemukan" });
            res.status(200).json({ success: true, data: order, message: "Data berhasil didapat" });
        } catch (error) {
            res.status(500).json({ success: false, message: "Terjadi kesalahan server", error: error.message });
        }
    },

    store: async (req, res) => {
        try {
            const order = await Order.create(req.body);
            res.status(201).json({ success: true, data: order, message: "Pesanan berhasil dibuat" });
        } catch (error) {
            res.status(400).json({ success: false, message: "Gagal membuat pesanan", error: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const { id } = req.params;
            const order = await Order.findByIdAndUpdate(id, req.body, { new: true });
            if (!order) return res.status(404).json({ success: false, message: "Pesanan tidak ditemukan" });
            res.status(200).json({ success: true, data: order, message: "Pesanan berhasil diperbarui" });
        } catch (error) {
            res.status(500).json({ success: false, message: "Terjadi kesalahan server", error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const order = await Order.findByIdAndDelete(id);
            if (!order) return res.status(404).json({ success: false, message: "Pesanan tidak ditemukan" });
            res.status(200).json({ success: true, data: order, message: "Pesanan berhasil dihapus" });
        } catch (error) {
            res.status(500).json({ success: false, message: "Terjadi kesalahan server", error: error.message });
        }
    }
};

module.exports = orderController;
