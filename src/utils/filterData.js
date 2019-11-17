const handleEquals = (products, attr, value) => {
  return products.filter(pd =>
    pd.property_values.find(
      pv =>
        (pv.value === value || pv.value === parseInt(value)) &&
        pv.property_id === attr
    )
  );
};

const handleGreaterThan = (products, attr, value) => {
  return products.filter(pd =>
    pd.property_values.find(pv => pv.value > value && pv.property_id === attr)
  );
};

const handleLessThan = (products, attr, value) => {
  return products.filter(pd =>
    pd.property_values.find(pv => pv.value < value && pv.property_id === attr)
  );
};

const handleHasAny = (products, attr) => {
  return products.filter(pd =>
    pd.property_values.find(pv => pv.property_id === attr)
  );
};

const handleHasNone = (products, attr) => {
  return products.filter(
    pd => !pd.property_values.find(pv => pv.property_id === attr)
  );
};

const filterData = (products, filters) => {
  let newProducts = [...products];

  if (filters.queryString) {
    if (filters.selectedOperator === "equals") {
      newProducts = handleEquals(
        products,
        filters.selectedProperty.id,
        filters.queryString
      );
    }

    if (filters.selectedOperator === "greater_than") {
      newProducts = handleGreaterThan(
        products,
        filters.selectedProperty.id,
        filters.queryString
      );
    }

    if (filters.selectedOperator === "less_than") {
      newProducts = handleLessThan(
        products,
        filters.selectedProperty.id,
        filters.queryString
      );
    }
  }

  if (filters.selectedOperator === "any") {
    newProducts = handleHasAny(products, filters.selectedProperty.id);
  }

  if (filters.selectedOperator === "none") {
    newProducts = handleHasNone(products, filters.selectedProperty.id);
  }

  console.log({ newProducts, filters });

  return newProducts;
};

export default filterData;
