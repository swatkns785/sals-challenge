import React from "react";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150
  }
}));

/*
 * getOperatorInfo finds gets the correct information for a given operator when operators are filtered by type (string/number/enumerated)
 * operators - array
 * operator - string
 */
const getOperatorInfo = (operators, operator) => {
  return operators.find(op => op.id === operator);
};

const Filters = ({
  properties,
  operators,
  setProperty,
  setOperator,
  setCategory,
  selectedProperty,
  selectedOperator,
  selectedCategory,
  setQueryString,
  operatorTypes,
  categoryType
}) => {
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
            <MenuItem key={property.id} value={property}>
              {property.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {Array.isArray(operatorTypes) && (
        <FormControl className={classes.formControl}>
          <InputLabel id="operator">Operator</InputLabel>
          <Select
            id="selected-operator"
            value={selectedOperator}
            onChange={setOperator}
          >
            {operatorTypes.map((operator, idx) => {
              const op = getOperatorInfo(operators, operator);
              return (
                <MenuItem key={`op-${idx}`} value={op.id}>
                  {op.text}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      )}
      {categoryType === "select" && !!selectedOperator && (
        <FormControl className={classes.formControl}>
          <InputLabel id="productName">Select category</InputLabel>
          <Select
            id="selected-category"
            value={selectedCategory}
            onChange={setCategory}
          >
            {selectedProperty.values.map((val, idx) => (
              <MenuItem key={`val-${idx}`} value={val}>
                {val}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      {categoryType === "textfield" && !!selectedOperator && (
        <FormControl
          className={classes.formControl}
          style={{ justifyContent: "flex-end" }}
        >
          <TextField
            id="productQuery"
            onChange={setQueryString}
            placeholder="parameter"
          />
        </FormControl>
      )}
    </Box>
  );
};

export default Filters;
