import { CATEGORIES_TYPE, IMAGES_TYPE } from "../types/types";

export const categoryAction = (category) => {
  return {
    type: CATEGORIES_TYPE,
    payload: category,
  };
};

export const categoryAsyncThunk = () => async (dispatch) => {
  let myHeaders = new Headers();
  myHeaders.append("x-api-key", "DEMO-API-KEY");

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const request = await fetch(
    "https://api.thecatapi.com/v1/categories",
    requestOptions
  );
  await request
    .json()
    .then((result) => dispatch(categoryAction(result)))
    .catch((error) => console.log("error", error));
};



export const imagesAction = (image) => {
  return {
    type: IMAGES_TYPE,
    payload: image,
  };
};
export const imagesAsyncThunk = () => async (dispatch) => {
  let myHeaders = new Headers();
  myHeaders.append("x-api-key", "DEMO-API-KEY");

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const request = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1",
    requestOptions
  );
  await request
    .json()
    .then((result) => dispatch(imagesAction(result)))
    .catch((error) => console.log("error", error));
};
