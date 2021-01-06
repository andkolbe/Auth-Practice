import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { TOKEN_KEY } from '../utils/api-service';

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, ...rest }) => {

    const token = localStorage.getItem(TOKEN_KEY)

    if (!token) {
        return <Redirect to={{ pathname: '/login', state: { msg: 'You must be logged in to write a new post' } }} />;
    } else {
        return (
            <Route { ...rest }>
                { children }
            </Route>
        )
    }
}

interface PrivateRouteProps {
    exact?: boolean;
    path: string;
}

export default PrivateRoute;