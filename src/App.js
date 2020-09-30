import * as React from "react";
import { Admin, Resource, ShowGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import UserIcon from "@material-ui/icons/Group";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

import { UserList, UserCreate, UserEdit } from "./views/users";
import { PhotoList, PhotoCreate, PhotoEdit } from "./views/image";
import { TodoList, TodoCreate, TodoEdit } from "./views/todo";
import Dashboard from "./Dashboard";
import authProvider from "./helper/authProvider";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => (
  <Admin
    dataProvider={dataProvider}
    dashboard={Dashboard}
    authProvider={authProvider}
  >
    <Resource
      name="users"
      list={UserList}
      icon={UserIcon}
      create={UserCreate}
      edit={UserEdit}
      show={ShowGuesser}
      options={{ label: "Funcionários" }}
    />
    <Resource
      name="photos"
      list={PhotoList}
      edit={CreateEdit}
      create={CreateCreate}
      icon={PhotoCameraIcon}
      options={{ label: "Fotos dos reparos" }}
    />
    <Resource
      name="todos"
      list={TodoList}
      edit={TodoEdit}
      create={TodoCreate}
      icon={FormatListBulletedIcon}
      options={{ label: "Reparos" }}
    />
  </Admin>
);

export default App;
