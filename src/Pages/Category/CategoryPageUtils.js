import { MOCKED_DATA } from "../ShopPage/MockData";

const COLLECTION_ID_MAP = {
  hats: 1,
  jackets: 2,
  shirts: 3,
  womens: 4,
  mens: 5,
};

export const specificCollection = (urlParam) => {
  return MOCKED_DATA.find(
    (category) => category.id === COLLECTION_ID_MAP[urlParam]
  );
};
