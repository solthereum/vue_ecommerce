import type { IProductItemInCart, IProductItem } from "@/@type";

export const addProductItemToBasket = (
  newProductItem: IProductItem,
  productListInCart: IProductItemInCart[]
): void => {
  const foundExistProductItem = productListInCart.find(
    (item) => item.productId === newProductItem.foodId
  );

  if (!foundExistProductItem) {
    productListInCart.push({
      productId: newProductItem.foodId,
      productTitle: newProductItem.foodName,
      prodctPrice: newProductItem.priceOfFood,
      productQuantity: 1,
    });
  } else {
    foundExistProductItem.productQuantity++;
  }
};
