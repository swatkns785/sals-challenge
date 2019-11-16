import React from "react";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150
  }
}));

const Filters = ({
  properties,
  operators,
  setProperty,
  setOperator,
  setCategory,
  selectedProperty,
  selectedOperator,
  selectedCategory
}) => {
  console.log(properties);
  console.log(operators);
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="row" px={1} pb={5}>
      <FormControl className={classes.formControl}>
        <InputLabel id="productName">Filter by attribute</InputLabel>
        <Select
          id="select-attr"
          value={selectedProperty}
          onChange={setProperty}
        >
          {properties.map(property => (
            <MenuItem key={property.id} value={property.name}>
              {property.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="operator">Operator</InputLabel>
        <Select
          id="selected-operator"
          value={selectedOperator}
          onChange={setOperator}
        >
          {operators.map((operator, idx) => (
            <MenuItem key={`op-${idx}`} value={operator.id}>
              {operator.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="productName">Select category</InputLabel>
        <Select
          id="selected-category"
          value={selectedCategory}
          onChange={setCategory}
        >
          {/* <MenuItem value= */}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filters;
