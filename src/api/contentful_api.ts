const spaceID = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
export const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

export const URL_API = `https://graphql.contentful.com/content/v1/spaces/${spaceID}`;
