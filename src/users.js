import * as React from "react";
import { List, Datagrid, TextField, EmailField, BooleanField, DateField, ImageField, EditButton } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useImageFieldStyles = makeStyles(theme => ({
    image: { // This will override the style of the <img> inside the <div>
        width: 50,
        height: 50,
        borderRadius: "50%",
    }
}));

export const UserList = props => {
    const imageFieldClasses = useImageFieldStyles();

    return (
        <List {...props}>
            <Datagrid>
                {/* <TextField source="id" /> */}
                <ImageField classes={imageFieldClasses} source="avatar" />
                <TextField source="username" />
                <TextField source="name" />
                <TextField source="lastname" />
                <EmailField source="email" />
                {/* <TextField source="token" /> */}
                <TextField source="approval_token" />
                <BooleanField source="approved" />
                {/* <TextField source="password" /> */}
                <DateField source="created_at" />
                <DateField source="updated_at" />
                <TextField source="deleted_at" />
                <EditButton />
            </Datagrid>
        </List>
    );
};