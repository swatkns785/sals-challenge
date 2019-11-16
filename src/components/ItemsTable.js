import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const ItemsTable = ({ products, properties }) => (
  <Table>
    <TableHead>
      <TableRow>
        {properties.map(property => (
          <TableCell key={property.id}>{property.name}</TableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
      {products ? (
        products.map(product => (
          <TableRow key={product.id}>
            {product.property_values.map(pv => (
              <TableCell key={pv.property_id}>{pv.value}</TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell>No results found</TableCell>
        </TableRow>
      )}
    </TableBody>
  </Table>
);

export default ItemsTable;
