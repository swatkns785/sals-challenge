import React from "react";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 225
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
  handleReset
}) => {
  const classes = useStyles();
  const propertyHasValues = !!(selectedProperty || {}).values;

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      px={1}
      pb={5}
    >
      <Box display="flex" flexDirection="row">
        <FormControl className={classes.formControl}>
          <InputLabel id="productName">Filter by attribute</InputLabel>
          <Select
            id="selected-attr"
            name="selected-attr"
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
              name="selected-operator"
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

        {!!selectedOperator ? (
          propertyHasValues ? (
            <FormControl
              className={classes.formControl}
              style={{ justifyContent: "flex-end" }}
            >
              <InputLabel id="productName">
                Select category/categories
              </InputLabel>
              <Select
                id="selected-category"
                name="selected-category"
                onChange={setCategory}
                value={selectedCategory}
                placeholder="parameter"
                multiple
              >
                {selectedProperty.values.map((spv, idx) => (
                  <MenuItem key={idx} value={spv}>
                    {spv}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : (
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
          )
        ) : null}
      </Box>
      <Button variant="outlined" color="primary" onClick={handleReset}>
        reset
      </Button>
    </Box>
  );
};

export default Filters;
