import { CATEGORIES_TYPE, IMAGES_TYPE } from "../types/types";

const initialState = {
  categories: [],
  cats: [],
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_TYPE:
      return { ...state, categories: payload };
    case IMAGES_TYPE:
      return { ...state, cats: payload };

    default:
      return state;
  }
};
