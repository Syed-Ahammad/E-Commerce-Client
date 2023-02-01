import { loadProduct } from "../../actions/productAction";

export const loadProductsData = () => {
  return async (dispatch, getstate) => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();

    if (data.data.length) {
      dispatch(loadProduct(data.data));
    }
  };
};
