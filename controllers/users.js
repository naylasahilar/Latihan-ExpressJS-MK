const User = require('../models/User');

module.exports = {
    // GET all users
    index: async (req, res) => {
        try {
            const users = await User.find();
            if (users.length > 0) {
                res.status(200).json({
                    status: true,
                    data: users,
                    method: req.method,
                    url: req.originalUrl
                });
            } else {
                res.status(404).json({
                    status: false,
                    message: "Data masih kosong"
                });
            }
        } catch (error) {
            res.status(500).json({ success: false, message: "Terjadi kesalahan server", error: error.message });
        }
    },

    // GET single user by ID
    show: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await User.findById(id);

            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "User tidak ditemukan"
                });
            }

            res.status(200).json({
                success: true,
                data: user,
                method: req.method,
                url: req.originalUrl,
                message: "Data berhasil didapat"
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Terjadi kesalahan server",
                error: error.message
            });
        }
    },

    // POST create new user
    store: async (req, res) => {
        try {
            const user = await User.create(req.body);
            res.status(201).json({
                status: true,
                data: user,
                method: req.method,
                url: req.originalUrl,
                message: "Data berhasil ditambahkan"
            });
        } catch (error) {
            res.status(400).json({ success: false, message: "Gagal menambahkan data", error: error.message });
        }
    },

    // PUT update user
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await User.findByIdAndUpdate(id, req.body, { new: true });

            if (!user) {
                return res.status(404).json({
                    status: false,
                    message: "User tidak ditemukan"
                });
            }

            res.status(200).json({
                status: true,
                data: user,
                method: req.method,
                url: req.originalUrl,
                message: "Data berhasil diubah"
            });
        } catch (error) {
            res.status(500).json({ success: false, message: "Terjadi kesalahan server", error: error.message });
        }
    },

    // DELETE user
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedUser = await User.findByIdAndDelete(id);

            if (!deletedUser) {
                return res.status(404).json({ success: false, message: "User tidak ditemukan" });
            }

            res.status(200).json({
                status: true,
                data: deletedUser,
                method: req.method,
                url: req.originalUrl,
                message: "Data berhasil dihapus"
            });
        } catch (error) {
            res.status(500).json({ success: false, message: "Terjadi kesalahan server", error: error.message });
        }
    }
}; 