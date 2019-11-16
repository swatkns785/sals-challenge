import React, { useReducer } from "react";

const ACTIONS = {
  SET_CATEGORY: "SET_CATEGORY",
  SET_OPERATOR: "SET_OPERATOR",
  SET_PROPERTY: "SET_PROPERTY",
  RESET: "RESET"
};

const INITIAL_STATE = {
  selectedProperty: null,
  selectedOperator: null,
  selectedCategory: null
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.RESET:
      return INITIAL_STATE;
    case ACTIONS.SET_CATEGORY:
    case ACTIONS.SET_OPERATOR:
    case ACTIONS.SET_PROPERTY:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export { INITIAL_STATE, ACTIONS };

export default filterReducer;
