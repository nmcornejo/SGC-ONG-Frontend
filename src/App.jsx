import React, { useState } from 'react';
import Menu from './components/Menu';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Usuarios from './pages/Usuarios';
import Solicitudes from './pages/Solicitudes';
import Reportes from './pages/Reportes';
import Bitacora from './pages/Bitacora';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('login');

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
  };

  return (
    <div>
      {isAuthenticated && <Menu setPage={setCurrentPage} />}

      <main style={{ padding: '20px' }}>
        {!isAuthenticated && currentPage === 'login' && (
          <Login onLoginSuccess={handleLoginSuccess} setPage={setCurrentPage} />
        )}

        {!isAuthenticated && currentPage === 'forgot' && (
          <div
            style={{
              maxWidth: '400px',
              margin: '50px auto',
              textAlign: 'center',
            }}
          >
            <h2>Recuperación de Contraseña</h2>
            <p>
              Se enviará un token temporal a su correo registrado [Req. 12].
            </p>
            <button
              onClick={() => setCurrentPage('login')}
              style={{ padding: '8px 16px' }}
            >
              Volver al Login
            </button>
          </div>
        )}

        {isAuthenticated && currentPage === 'dashboard' && <Dashboard />}
        {isAuthenticated && currentPage === 'usuarios' && <Usuarios />}
        {isAuthenticated && currentPage === 'solicitudes' && <Solicitudes />}
        {isAuthenticated && currentPage === 'reportes' && <Reportes />}
        {isAuthenticated && currentPage === 'bitacora' && <Bitacora />}
      </main>
    </div>
  );
}
