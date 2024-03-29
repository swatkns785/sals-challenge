const handleEquals = (products, attr, value) => {
  if (!value.length) {
    return products;
  }

  return products.filter(pd =>
    pd.property_values.find(pv => {
      const regex = new RegExp(pv.value, "i");
      return (
        (regex.test(value) || pv.value === parseInt(value)) &&
        pv.property_id === attr
      );
    })
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

const handleIn = (products, attr, value) => {
  if (Array.isArray(value) ? value.length : value) {
    return products.filter(pd =>
      pd.property_values.find(pv => {
        const regex = new RegExp(pv.value, "i");
        return pv.property_id === attr && regex.test(value);
      })
    );
  }

  return products;
};

const handleContains = (products, attr, value) => {
  if (value) {
    return products.filter(pd =>
      pd.property_values.find(pv => {
        const regex = new RegExp(value, "i");
        return pv.property_id === attr && regex.test(pv.value);
      })
    );
  }

  return products;
};

const filterData = (products, filters) => {
  let newProducts = [...products];

  if (filters.selectedOperator === "equals") {
    newProducts = handleEquals(
      products,
      filters.selectedProperty.id,
      filters.queryString || filters.selectedCategory
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

  if (filters.selectedOperator === "in") {
    newProducts = handleIn(
      products,
      filters.selectedProperty.id,
      filters.queryString || filters.selectedCategory
    );
  }

  if (filters.selectedOperator === "contains") {
    newProducts = handleContains(
      products,
      filters.selectedProperty.id,
      filters.queryString
    );
  }

  if (filters.selectedOperator === "any") {
    newProducts = handleHasAny(products, filters.selectedProperty.id);
  }

  if (filters.selectedOperator === "none") {
    newProducts = handleHasNone(products, filters.selectedProperty.id);
  }

  return newProducts;
};

export default filterData;
