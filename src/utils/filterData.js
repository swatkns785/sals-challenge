const handleEquals = (products, value) => {
  return products.filter(pd =>
    pd.property_values.find(pv => pv.value === value)
  );
};

const filterData = (products, filters) => {
  let newProducts = [...products];

  if (filters.queryString) {
    if (filters.selectedOperator === "equals") {
      newProducts = handleEquals(products, filters.queryString);
    }
  }

  console.log({ newProducts, filters });

  return newProducts;
};

export default filterData;
