import * as React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
    BooleanInput,
    ImageInput,
    ImageField
} from 'react-admin';

export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput disabled source="username" />
            <TextInput source="email" />
            <TextInput source="name" />
            <TextInput source="lastname" />
            <TextInput source="password" />
            <TextInput source="avatar" title="Avatar URL" />
            <BooleanInput source="approved" />
        </SimpleForm>
    </Edit>
);