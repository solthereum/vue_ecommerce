export const queryMenuCollection = `{
    menuGaoVeGanCollection {
      items {
      foodName
      foodId
      descriptionAboutFood
      category
      priceOfFood
      foodImage {
        url
        title
      }
      options
    }
  }
}`;
