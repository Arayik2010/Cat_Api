import { CATEGORIES_TYPE } from "../types/types";

const initialState = {
  categories: [],
  cat: [],
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_TYPE:
      return { ...state, categories: payload };

    default:
      return state;
  }
};
