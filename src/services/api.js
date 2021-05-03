import callApi from "../utils/call-api";

export const getItems = (category) =>
  callApi(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}`,
    { method: "GET" }
  );
