import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import { UserList } from './users.js';
import { PostEdit } from './posts.js';
import authProvider from './authProvider';
import { GUARDIAN_ADMIN_API } from './config';
import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@material-ui/icons/Group';

const dataProvider = jsonServerProvider(GUARDIAN_ADMIN_API);
// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="users" list={UserList} edit={PostEdit} icon={UserIcon} />
    </Admin>
)

export default App;
