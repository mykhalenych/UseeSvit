import React from 'react';
import {Link, Outlet} from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Public Page</Link>
                </li>
            </ul>

            <Outlet />
        </>
    );
};
export default MainLayout;
