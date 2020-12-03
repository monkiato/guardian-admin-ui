import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import { UserList } from './users.js';
import { PostEdit } from './posts.js';
import authProvider from './authProvider';
import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@material-ui/icons/Group';

const dataProvider = jsonServerProvider('http://localhost:8080/admin');
// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="users" list={UserList}  edit={PostEdit} icon={UserIcon} />
    </Admin>
)

export default App;
