import React from "react";
import filterData from "../filterData";

const products = [
  {
    id: 0,
    property_values: [
      {
        property_id: 0,
        value: "Headphones"
      },
      {
        property_id: 1,
        value: "black"
      },
      {
        property_id: 2,
        value: 5
      },
      {
        property_id: 3,
        value: "electronics"
      },
      {
        property_id: 4,
        value: "false"
      }
    ]
  },
  {
    id: 1,
    property_values: [
      {
        property_id: 0,
        value: "Cell Phone"
      },
      {
        property_id: 1,
        value: "black"
      },
      {
        property_id: 2,
        value: 3
      },
      {
        property_id: 3,
        value: "electronics"
      },
      {
        property_id: 4,
        value: "true"
      }
    ]
  },
  {
    id: 2,
    property_values: [
      {
        property_id: 0,
        value: "Keyboard"
      },
      {
        property_id: 1,
        value: "grey"
      },
      {
        property_id: 2,
        value: 5
      },
      {
        property_id: 3,
        value: "electronics"
      },
      {
        property_id: 4,
        value: "false"
      }
    ]
  },
  {
    id: 3,
    property_values: [
      {
        property_id: 0,
        value: "Cup"
      },
      {
        property_id: 1,
        value: "white"
      },
      {
        property_id: 2,
        value: 3
      },
      {
        property_id: 3,
        value: "kitchenware"
      }
    ]
  },
  {
    id: 4,
    property_values: [
      {
        property_id: 0,
        value: "Key"
      },
      {
        property_id: 1,
        value: "silver"
      },
      {
        property_id: 2,
        value: 1
      },
      {
        property_id: 3,
        value: "tools"
      }
    ]
  },
  {
    id: 5,
    property_values: [
      {
        property_id: 0,
        value: "Hammer"
      },
      {
        property_id: 1,
        value: "brown"
      },
      {
        property_id: 2,
        value: 19
      },
      {
        property_id: 3,
        value: "tools"
      }
    ]
  }
];

describe("filterData", () => {
  describe("EQUALS operator", () => {
    it("returns the correct product when the parameter matches", () => {
      const filters = {
        selectedProperty: {
          id: 0,
          name: "Product Name"
        },
        queryString: "headphones",
        selectedOperator: "equals"
      };

      const result = filterData(products, filters);

      expect(result.length).toBe(1);
      expect(result[0].property_values[0].value).toBe("Headphones");
    });

    it("returns an empty array when the the query does not match", () => {
      const filters = {
        selectedProperty: {
          id: 0,
          name: "Product Name"
        },
        queryString: "headphone",
        selectedOperator: "equals"
      };

      const result = filterData(products, filters);

      expect(result.length).toBe(0);
    });
  });

  describe("GREATER THAN operator", () => {
    it("returns the correct matching products", () => {
      const filters = {
        selectedProperty: {
          id: 2,
          name: "weight (oz)"
        },
        queryString: 4,
        selectedOperator: "greater_than"
      };

      const result = filterData(products, filters);

      expect(result.length).toBe(3);
      expect(result[0].property_values[2].value).toBe(5);
      expect(result[1].property_values[2].value).toBe(5);
      expect(result[2].property_values[2].value).toBe(19);
    });

    it("returns an empty array when the the query does not match", () => {
      const filters = {
        selectedProperty: {
          id: 2,
          name: "weight (oz)"
        },
        queryString: 19,
        selectedOperator: "greater_than"
      };

      const result = filterData(products, filters);

      expect(result.length).toBe(0);
    });
  });

  describe("LESS THAN operator", () => {
    it("returns the correct matching products", () => {
      const filters = {
        selectedProperty: {
          id: 2,
          name: "weight (oz)"
        },
        queryString: 6,
        selectedOperator: "less_than"
      };

      const result = filterData(products, filters);

      expect(result.length).toBe(5);
      expect(result[0].property_values[2].value).toBe(5);
      expect(result[1].property_values[2].value).toBe(3);
      expect(result[2].property_values[2].value).toBe(5);
      expect(result[3].property_values[2].value).toBe(3);
      expect(result[4].property_values[2].value).toBe(1);
    });

    it("returns an empty array when the the query does not match", () => {
      const filters = {
        selectedProperty: {
          id: 2,
          name: "weight (oz)"
        },
        queryString: 1,
        selectedOperator: "less_than"
      };

      const result = filterData(products, filters);

      expect(result.length).toBe(0);
    });
  });

  describe("ANY operator", () => {
    it("returns the correct matching products ", () => {
      const filters = {
        selectedProperty: {
          id: 4,
          name: "wireless"
        },
        selectedOperator: "any"
      };

      const result = filterData(products, filters);

      expect(result.length).toBe(3);
      expect(result[0].property_values[4].value).toBe("false");
      expect(result[1].property_values[4].value).toBe("true");
      expect(result[2].property_values[4].value).toBe("false");
    });
  });

  describe("NONE operator", () => {
    it("returns the correct matching products ", () => {
      const filters = {
        selectedProperty: {
          id: 4,
          name: "wireless"
        },
        selectedOperator: "none"
      };

      const result = filterData(products, filters);

      expect(result.length).toBe(3); // there are three products that don't have a value
    });
  });

  describe("IN operator", () => {
    it("returns the correct matching products when the query is a string", () => {
      const filters = {
        selectedProperty: {
          id: 1,
          name: "color"
        },
        queryString: "brown black",
        selectedOperator: "in"
      };

      const result = filterData(products, filters);

      expect(result.length).toBe(3);
      expect(result[0].property_values[1].value).toBe("black");
      expect(result[1].property_values[1].value).toBe("black");
      expect(result[2].property_values[1].value).toBe("brown");
    });

    it("returns the correct matching products when the query is a array", () => {
      const filters = {
        selectedProperty: {
          id: 1,
          name: "color"
        },
        queryString: "",
        selectedCategory: ["black", "brown"],
        selectedOperator: "in"
      };

      const result = filterData(products, filters);

      expect(result.length).toBe(3);
      expect(result[0].property_values[1].value).toBe("black");
      expect(result[1].property_values[1].value).toBe("black");
      expect(result[2].property_values[1].value).toBe("brown");
    });

    it("returns an empty array when the the query does not match", () => {
      const filters = {
        selectedProperty: {
          id: 1,
          name: "color"
        },
        queryString: "blue",
        selectedOperator: "in"
      };

      const result = filterData(products, filters);

      expect(result.length).toBe(0);
    });
  });

  describe("CONTAINS operator", () => {
    it("returns the correct matching products with a query string that is partially correc", () => {
      const filters = {
        selectedProperty: {
          id: 0,
          name: "Product Name"
        },
        queryString: "phone",
        selectedOperator: "contains"
      };

      const result = filterData(products, filters);

      expect(result.length).toBe(2);
      expect(result[0].property_values[0].value).toBe("Headphones");
      expect(result[1].property_values[0].value).toBe("Cell Phone");
    });

    it("returns an empty array when the the query does not match", () => {
      const filters = {
        selectedProperty: {
          id: 0,
          name: "Product Name"
        },
        queryString: "phonex",
        selectedOperator: "contains"
      };

      const result = filterData(products, filters);

      expect(result.length).toBe(0);
    });
  });
});
