export const queryMenuCollection = `{
  menuCollection {
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
      option
    }
  }
}`;
