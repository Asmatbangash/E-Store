const getCatagories = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const data = await res.json();
  return data;
};

const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
};

export { getCatagories, getProducts };
