const ACTIONS = {
  SET_CATEGORY: "SET_CATEGORY",
  SET_OPERATOR: "SET_OPERATOR",
  SET_PROPERTY: "SET_PROPERTY",
  SET_QUERY_STRING: "SET_QUERY_STRING",
  RESET: "RESET"
};

// this maps the potential types of operators depending on the property's type
const OPERATOR_MAP = {
  string: ["equals", "any", "none", "in", "contains"],
  number: ["equals", "greater_than", "less_than"],
  enumerated: ["equals", "any", "none", "in"]
};

const INITIAL_STATE = {
  selectedProperty: "",
  selectedOperator: "",
  selectedCategory: [],
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
      return {
        ...state,
        ...action.payload
      };
    case ACTIONS.SET_OPERATOR:
      return {
        ...state,
        ...action.payload
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
