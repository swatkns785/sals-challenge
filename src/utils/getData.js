// import datastore here to initialize it on the window
import datastore from "./datastore";

const getData = () => {
  const products = window.datastore.getProducts();
  const properties = window.datastore.getProperties();
  const operators = window.datastore.getOperators();

  return {
    products,
    properties,
    operators
  };
};

export default getData;
