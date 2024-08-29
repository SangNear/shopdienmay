import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        slug: {
            type: String,
            require: true,
            unique: true
        },
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },

        categories: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category"
        }],
        images: {
            type: [String]
        },
        quantity: {
            type: Number,
        },

        salePrice: {
            type: Number
        },
        specification: {
            type: Map,
            of: String
        },

    },
    {
        timestamps: true
    }
)

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema)

export default Product