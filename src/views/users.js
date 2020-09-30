import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  SimpleForm,
  TextInput,
  Edit,
  Create,
  Show,
  SimpleShowLayout,
} from "react-admin";

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

export const UserEdit = (props) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="address" />
      <TextInput source="phone" />
    </SimpleForm>
  </Edit>
);

export const UserShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" placeholder="nome" />
      <EmailField source="email" />
      <TextField source="adress.street" />
      <TextField source="phone" />
    </SimpleShowLayout>
  </Show>
);

export const UserCreate = (props) => (
  <Create {...props} submitOnEnter={true}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="address" />
      <TextInput source="phone" />
    </SimpleForm>
  </Create>
);

export const UserList = (props) => (
  <List {...props} title="Usuários Cadastrados">
    <Datagrid rowClick="edit">
      <TextField source="name" label="Nome" />
      <EmailField source="email" label="Email" />
      <TextField source="address.street" label="Endereço" />
      <TextField source="phone" label="Telefone" />
      <TextField source="company.name" label="Empresa" />
    </Datagrid>
  </List>
);
