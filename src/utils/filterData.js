const handleEquals = (options, value) => {
  return options.includes(value);
};

const filterData = (products, filters) => {
  const newProducts = [...products];

  console.log({ newProducts, filters });

  return newProducts;
};

export default filterData;
