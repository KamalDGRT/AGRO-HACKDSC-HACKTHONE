import React from 'react'
import AdminAddProduct from './AdminAddProduct'
import AdminHeader from './AdminHeader'
import AdminNavMenu from './AdminNavMenu'

const Admin = () => {
        return (
            <div>
                <AdminHeader/>
                <AdminNavMenu/>
                <AdminAddProduct/>
            </div>
        );
    }

export default Admin;
