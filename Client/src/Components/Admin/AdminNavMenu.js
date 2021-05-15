import React from 'react'
import { Link } from 'react-router-dom';
import './AdminNavMenu.css'

const AdminNavMenu = () => {
    return (
        <div>
            <div className="admin-nav-menu-container">
                <Link to = "">
                    <button>Dashboard</button>
                </Link>
                <Link to = "">
                    <button>Add Product</button>
                </Link>
                <Link to = "">
                    <button>View Product</button>
                </Link>
            </div>
        </div>
    )
}

export default AdminNavMenu;
