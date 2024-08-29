import Product from "@/lib/models/Product"
import { connectDb } from "@/lib/mongoDb"
import { toslug } from "@/lib/utils"
import { NextRequest, NextResponse } from "next/server"
import path from "path"
import fs from "fs"

export const POST = async (req: Request) => {
    try {
        await connectDb()
        
        const { name, price, description, categories, images, quantity, salePrice, specification } = await req.json()
        if (!name || !description || !price ) {
            return new NextResponse("not enough data to create a product", { status: 400 })
        }

        const isNameExists = await Product.findOne({ name: name })
        if (isNameExists) {
            return new NextResponse("Product name is exists! Please choose another one.")
        }
        let imgBase64URL = null;

        if (images && images.filename) {
            // Use appropriate path handling
            const imgPath = path.join(process.cwd(), 'public', 'images', images.filename);
            try {
                const imgBase64 = fs.readFileSync(imgPath, { encoding: "base64" });
                imgBase64URL = `data:image/${path.extname(images.filename).slice(1)};base64,${imgBase64}`;
            } catch (err) {
                console.error("Error reading image file:", err);
                return new NextResponse("Error processing image file", { status: 500 });
            }
        }

        const newProduct = await Product.create({
            name,
            price,
            slug: toslug(name),
            description,
            categories,
            images: imgBase64URL,
            quantity,
            salePrice,
            specification
        })

        await newProduct.save()
        return NextResponse.json(newProduct, { status: 200 });
    } catch (error) {
        console.log(error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}

export const GET = async (req: NextRequest) => {
    try {
        await connectDb()
        const getAllProducts = await Product.find()
        return NextResponse.json(getAllProducts, { status: 200 })
    } catch (error) {
        console.log(error);

        return new NextResponse("Internal Errors", { status: 500 })
    }
}