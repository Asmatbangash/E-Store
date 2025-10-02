const getCatagories = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const data = await res.json();
  return data;
};

const getProducts = async (product_id = null) => {
  let API = "https://fakestoreapi.com/products";
  if (product_id != null) {
    API += "/" + product_id;
  }
  const res = await fetch(API);
  const data = await res.json();
  return data;
};

export { getCatagories, getProducts };
