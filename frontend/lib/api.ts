import api from "./axios";
import { Product, ProductResponse } from "@/types/product";

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await api.get<ProductResponse>("/products");
    return response.data.products;
  } catch (error) {
    console.error(error);
    throw new Error(
      "Unable to load products. Please try again later."
    );
  }
};

export const getProduct = async (
  id: number
): Promise<Product> => {
  try {
    const response = await api.get<Product>(`/products/${id}`);
    console.log("------",response)
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(
      "Unable to load products. Please try again later."
    );
  }
};