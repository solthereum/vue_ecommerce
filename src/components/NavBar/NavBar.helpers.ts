export const navigation = {
  categories: [
    {
      id: "vorspeise",
      name: "Vorspeise",
    },
    {
      id: "spezial_des_hauses",
      name: "Spezial Des Hauses",
    },
    {
      id: "nudeln_gerichte",
      name: "Nudeln Gerichte",
    },
    {
      id: "gerichte_mit_Reis",
      name: "Gerichte mit Reis",
    },
    {
      id: "drinks",
      name: "Drinks",
    },
  ],
  // pages: [
  //   { name: "Company", href: "#" },
  //   { name: "Stores", href: "#" },
  // ],
};

export const CategoryConstants = {
  STARTERS: "STARTERS",
  MAINCOURSES: "MAIN-COURSES",
  SOUPS: "SOUPS",
  DRINKS: "DRINKS",
  DESSERT: "DESSERT",
} as const;

export const CATEGORY = Object.values(CategoryConstants);
