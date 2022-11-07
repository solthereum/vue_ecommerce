import axios from "axios";

import { queryMenuCollection } from "./contenful_graphql_query";
import { accessToken, URL_API } from "./contentful_api";

export const fetchMenuCollection = async () => {
  return await axios.post(
    URL_API,
    JSON.stringify({ query: queryMenuCollection }),
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );
};
