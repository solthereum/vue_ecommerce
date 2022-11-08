import type { IFoodItem } from "@/@type";
import { navigation } from "@/components/NavBar/NavBar.helpers";

export const categorizedProducts = (products: IFoodItem[]) => {
  const productIdMapping = {} as Record<string, IFoodItem[]>;
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
