import ProductForm from "@/components/admin/form/ProductForm";
import { notFound } from "next/navigation";
import { getProductById } from "@/lib/service/product";

export default async function EditProduk({ params }) {
    const { id } = await params
    const product = await getProductById(id)

    if(!product) notFound()

    return (
        <ProductForm product={product}/>
    )
}