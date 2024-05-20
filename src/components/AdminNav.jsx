import { Link, useLocation } from 'react-router-dom';

const AdminNav = () => {
    const location = useLocation();
    
    return (
        <nav className="flex gap-3">
            <Link to='/admin/perfil'
                className={`font-bold uppercase ${location.pathname === '/admin/perfil' ? 'text-indigo-700' : 'text-gray-500'} hover:text-indigo-600`}
            >
                Perfil
            </Link>
            <Link to='/admin/cambiar-password'
                className={`font-bold uppercase ${location.pathname === '/admin/cambiar-password' ? 'text-indigo-700' : 'text-gray-500'} hover:text-indigo-600`}
            >
                Cambiar Contraseña
            </Link>
        </nav>
    )
}

export default AdminNav;