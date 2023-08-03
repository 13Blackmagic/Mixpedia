import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import { Route, Redirect, Navigate } from 'react-router-dom';


const ProtectedRoute = ({ component: Component, children }) => {
    const { loading, data } = useQuery(QUERY_USER, {
        username: 'luceatscode'
    });
    console.log(data);
    if (localStorage.getItem('id_token') !== undefined && localStorage.getItem('id_token') !== null) {
        return children;
    }   
    return <Navigate to="/login" />;
};

export default ProtectedRoute;