import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import { getData } from "./utils";

import "./App.css";
import { ItemsTable } from "./components";

function App() {
  const { products, properties, operators } = getData();

  return (
    <Container maxWidth="md">
      <Grid spacing={2}>
        <ItemsTable properties={properties} products={products} />
      </Grid>
    </Container>
  );
}

export default App;
