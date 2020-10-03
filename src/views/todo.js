import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  BooleanField,
  EditButton,
  SimpleForm,
  Edit,
  TextInput,
  ReferenceInput,
  SelectInput,
  RadioButtonGroupInput,
  Create,
} from "react-admin";

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

export const TodoCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <RadioButtonGroupInput
        source="category"
        choices={[
          { id: "false", name: "Completada" },
          { id: "true", name: "Não completada" },
        ]}
      />
    </SimpleForm>
  </Create>
);

export const TodoEdit = (props) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <RadioButtonGroupInput
        source="category"
        choices={[
          { id: "completed", name: "Completada" },
          { id: "noncompleted", name: "Não completada" },
        ]}
      />
    </SimpleForm>
  </Edit>
);

export const TodoList = (props) => (
  <List {...props} title="Reparos">
    <Datagrid rowClick="edit">
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title" label="Descrição" />
      <BooleanField source="completed" label="Completado" />
      <EditButton />
    </Datagrid>
  </List>
);
