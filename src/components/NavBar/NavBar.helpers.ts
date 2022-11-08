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
};

export const CategoryConstants = {
  vorspeise: "Vorspeise",
  spezial_des_hauses: "Spezial Des Hauses",
  nudeln_gerichte: "Nudeln Gerichte",
  gerichte_mit_Reis: "Gerichte mit Reis",
  drinks: "Drinks",
} as const;

export const CATEGORY = Object.values(CategoryConstants);

export type TCategory = keyof typeof CategoryConstants;
