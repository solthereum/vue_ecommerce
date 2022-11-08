export interface IFoodItem {
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
