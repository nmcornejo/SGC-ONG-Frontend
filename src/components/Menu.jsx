import React, { useState } from 'react';

export default function Menu({ setPage }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '1rem' }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2 style={{ margin: 0, color: 'white' }}>IJM</h2>

        {/* Enlaces para pantalla normal */}
        <div style={{ display: 'flex', gap: '15px' }}>
          <button onClick={() => setPage('dashboard')} style={buttonStyle}>
            Dashboard
          </button>
          <button onClick={() => setPage('usuarios')} style={buttonStyle}>
            Usuarios
          </button>
          <button onClick={() => setPage('solicitudes')} style={buttonStyle}>
            Solicitudes
          </button>
          <button onClick={() => setPage('reportes')} style={buttonStyle}>
            Reportes PDF
          </button>
          <button onClick={() => setPage('bitacora')} style={buttonStyle}>
            Bitácora
          </button>
          <button
            onClick={() => setPage('login')}
            style={{ ...buttonStyle, backgroundColor: '#dc2626' }}
          >
            Salir
          </button>
        </div>
      </div>
    </nav>
  );
}

const buttonStyle = {
  background: 'none',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 'bold',
};
