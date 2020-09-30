import * as React from "react";
import { List, Datagrid, TextField, ImageField } from "react-admin";

export const PhotoList = (props) => (
  <List {...props} title="Fotos dos Reparos">
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <ImageField source="thumbnailUrl" />
    </Datagrid>
  </List>
);
