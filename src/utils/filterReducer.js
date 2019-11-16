import React, { useReducer } from "react";

const ACTIONS = {
  SET_CATEGORY: "SET_CATEGORY",
  SET_OPERATOR: "SET_OPERATOR",
  SET_PROPERTY: "SET_PROPERTY",
  SET_QUERY_STRING: "SET_QUERY_STRING",
  RESET: "RESET"
};

const OPERATOR_MAP = {
  string: ["equals", "any", "none", "in", "contains"],
  number: ["equals", "greater_than", "less_than", "any", "none", "in"],
  enumerated: ["equals", "any", "none", "any"]
};

const CATEGORY_TYPES = {
  equals: "textfield",
  greater_than: "textfield",
  less_than: "textfield",
  any: null,
  none: null,
  in: "multiselect",
  contains: "textfield"
};

const INITIAL_STATE = {
  selectedProperty: null,
  selectedOperator: null,
  selectedCategory: null,
  operatorTypes: null,
  queryString: null
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.RESET:
      return INITIAL_STATE;
    case ACTIONS.SET_QUERY_STRING:
      return {
        ...state,
        queryString: action.payload.queryString
      };
    case ACTIONS.SET_CATEGORY:
    case ACTIONS.SET_OPERATOR:
      return {
        ...state,
        ...action.payload,
        categoryType: CATEGORY_TYPES[action.payload.selectedOperator]
      };
    case ACTIONS.SET_PROPERTY:
      return {
        ...INITIAL_STATE,
        ...action.payload,
        operatorTypes: OPERATOR_MAP[action.payload.selectedProperty.type],
        name: action.payload.selectedProperty.name
      };
    default:
      return state;
  }
};

export { INITIAL_STATE, ACTIONS };

export default filterReducer;
