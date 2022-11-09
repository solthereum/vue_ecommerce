export interface IProductItem {
  foodName: string;
  foodId: string;
  descriptionAboutFood: string;
  category: string;
  priceOfFood: number;
  foodImage: {
    url: string;
    title: string;
  };
  options: null;
}

export interface IProductItemInCart {
  productId: string;
  productTitle: string;
  prodctPrice: number;
  productQuantity: number;
  productRequire?: string;
}
