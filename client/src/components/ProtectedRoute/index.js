import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import { Route, Redirect, Navigate } from 'react-router-dom';
import React from 'react';


class ProtectedRoute extends Route {
    constructor (children) {
        super(children);
        this.children = children;
    }
//     const { loading, data } = useQuery(QUERY_USER, {
//         username: 'luceatscode'
//     });
//     console.log(data);
//     if (localStorage.getItem('id_token') !== undefined && localStorage.getItem('id_token') !== null) {
//         return<Route
//         path ={children.path}
//         element={children.Component}
//       />
// ;
//     }   
//     return <Navigate to="/login" />;

    render() {
        if (localStorage.getItem('id_token') !== undefined && localStorage.getItem('id_token') !== null) {
            return<Route
            path ={this.children.path}
            element={this.children.Component}
          />
        }
        return <Navigate to="/login" />;
    }
};

export default ProtectedRoute;