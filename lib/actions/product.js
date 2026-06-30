"use server";

import {
  createProduct,
  updateProduct,
  getProductById,
  deleteProduct,
} from "../service/product";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getStoragePathUrl } from "../utils/storage";
import { getPublicUrl, uploadImage, deleteImage } from "../supabase/storage";
import { auth } from "@/auth";

export async function deleteProductAction(id) {
  const product = await getProductById(id);

  if (!product) throw new Error("Produk tidak ditemukan!");
  if (product.imageUrl) {
    await deleteImage("product", getStoragePathUrl(product.imageUrl));
  }

  await deleteProduct(id);

  revalidatePath("/dashboard/produk");
}

export async function createProductAction(formData) {
  const session = await auth();

  if (!session?.user) throw new Error("Unauthorized");

  const name = formData.get("name");
  const slug = formData.get("slug");
  const description = formData.get("description");
  const priceRaw = formData.get("price");
  const price = parseInt(priceRaw, 10);
  const status = formData.get("status");
  const file = formData.get("image");

  let imageUrl = null;

  if (file && file.size > 0) {
    if (!file.type.startsWith("image/")) {
      throw new Error("file harus berupa gambar");
    }

    if (file.size > 2 * 1024 * 1024) {
      throw new Error("ukuran file maksimal 2 MB");
    }

    const filePath = await uploadImage(file, "product");
    imageUrl = getPublicUrl("product", filePath);
  }

  await createProduct({
    name,
    slug,
    description: description || null,
    price,
    status,
    imageUrl: imageUrl || null,
    authorId: session.user.id,
  });

  revalidatePath("/dashboard/produk");
  redirect("/dashboard/produk");
}

export async function updateProductAction(formData) {
    const session = await auth();
    const id = formData.get("id");
    const product = await getProductById(id);

    if (!session?.user) throw new Error("Unauthorized");
    if (!product) throw new Error("produk tidak ditemukan");

    const name = formData.get("name");
    const slug = formData.get("slug");
    const description = formData.get("description");
    const priceRaw = formData.get("price");
    const price = parseInt(priceRaw, 10);
    const status = formData.get("status");
    const file = formData.get("image");

    let imageUrl = product.imageUrl || null;

    if (file && file.size > 0) {
      if (product.imageUrl) {
        await deleteImage("product", getStoragePathUrl(product.imageUrl));
      }
      const filePath = await uploadImage(file, "product");
      imageUrl = getPublicUrl("product", filePath);
    }

    await updateProduct(id, {
      name,
      slug,
      description: description || null,
      price,
      status,
      imageUrl: imageUrl || null,
    });

    revalidatePath("/dashboard/produk")
    redirect("/dashboard/produk")
}
