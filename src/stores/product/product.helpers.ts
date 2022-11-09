import type { IProductItem } from "@/@type";
import { navigation } from "@/components/NavBar/NavBar.helpers";

export const categorizedProducts = (products: IProductItem[]) => {
  const productIdMapping = {} as Record<string, IProductItem[]>;
  if (!products) {
    return [];
  }
  for (const product of products) {
    productIdMapping[product.category] =
      productIdMapping[product.category] || [];
    productIdMapping[product.category].push(product);
  }
  console.log({ productIdMapping });
  return navigation.categories.map((category) => productIdMapping[category.id]);
};
