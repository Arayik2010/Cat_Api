import { CATEGORIES_TYPE } from "../types/types";

export const categoryAction = (category) => {
  return {
    type: CATEGORIES_TYPE,
    payload: category,
  };
};
