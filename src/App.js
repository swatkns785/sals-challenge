import React, { useReducer } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import {
  getData,
  filterReducer,
  INITIAL_STATE,
  ACTIONS,
  filterData
} from "./utils";

import { ItemsTable, Filters } from "./components";

function App() {
  const { products, properties, operators } = getData();
  const [filters, dispatch] = useReducer(filterReducer, INITIAL_STATE);

  const filteredProducts = filterData(products, filters);

  return (
    <Container maxWidth="md">
      <Grid spacing={2}>
        <Filters
          properties={properties}
          operators={operators}
          reset={() => dispatch({ type: ACTIONS.RESET })}
          setCategory={el =>
            dispatch({
              type: ACTIONS.SET_CATEGORY,
              payload: { selectedCategory: el.target.value }
            })
          }
          setOperator={el =>
            dispatch({
              type: ACTIONS.SET_OPERATOR,
              payload: { selectedOperator: el.target.value }
            })
          }
          setProperty={el =>
            dispatch({
              type: ACTIONS.SET_PROPERTY,
              payload: { selectedProperty: el.target.value }
            })
          }
          setQueryString={el =>
            dispatch({
              type: ACTIONS.SET_QUERY_STRING,
              payload: { queryString: el.target.value }
            })
          }
          selectedCategory={filters.selectedCategory}
          selectedOperator={filters.selectedOperator}
          selectedProperty={filters.selectedProperty}
          operatorTypes={filters.operatorTypes}
          categoryType={filters.categoryType}
        />
        <ItemsTable properties={properties} products={filteredProducts} />
      </Grid>
    </Container>
  );
}

export default App;
