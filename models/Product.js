const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Silahkan isikan nama produk'],
        unique: true
    },
    price: {
        type: Number,
        required: [true, 'Silahkan isikan harga produk']
    },
    stock: {
        type: Number,
        required: [true, 'Silahkan isikan jumlah stok produk'],
        min: [0, 'Stok tidak boleh kurang dari 0']
    },
    description: {
        type: String,
        required: [true, 'Silahkan isikan deskripsi produk']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', ProductSchema);
