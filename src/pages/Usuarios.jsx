import React, { useState } from 'react';
import PasswordMeter from '../components/PasswordMeter';

export default function Usuarios() {
  // Lista inicial de usuarios simulada
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: 'Nashca Cornejo', email: 'nashca@ong.org', rol: 'Finanzas', estado: 'Activo' },
    { id: 2, nombre: 'Natalia Cornejo', email: 'natalia@ong.org', rol: 'Aprobador', estado: 'Activo' },
    { id: 3, nombre: 'Juan Pérez', email: 'juan@ong.org', rol: 'Solicitante', estado: 'Inactivo' },
  ]);

  // Estados para el formulario
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('Solicitante');

  // Función para agregar un usuario (CREATE)
  const handleAgregarUsuario = (e) => {
    e.preventDefault();

    const nuevoUsuario = {
      id: usuarios.length + 1,
      nombre,
      email,
      rol,
      estado: 'Activo' // Por defecto nace activo
    };

    setUsuarios([...usuarios, nuevoUsuario]);
    
    // Limpiar formulario
    setNombre('');
    setEmail('');
    setPassword('');
    setRol('Solicitante');
  };

  // Función para eliminación lógica (DELETE LÓGICO)
  const handleToggleEstado = (id) => {
    const usuariosActualizados = usuarios.map((user) => {
      if (user.id === id) {
        // Cambiar el estado en lugar de eliminar el registro
        const nuevoEstado = user.estado === 'Activo' ? 'Inactivo' : 'Activo';
        return { ...user, estado: nuevoEstado };
      }
      return user;
    });

    setUsuarios(usuariosActualizados);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2>Módulo de Control de Usuarios</h2>

      {/* Formulario de Registro */}
      <div style={{ background: '#f9fafb', padding: '15px', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '20px' }}>
        <h3>Registrar Nuevo Usuario</h3>
        <form onSubmit={handleAgregarUsuario} style={{ display: 'grid', gap: '10px' }}>
          <div>
            <label>Nombre Completo:</label>
            <input 
              type="text" 
              required 
              style={{ width: '100%', padding: '8px', marginTop: '4px' }} 
              value={nombre} 
              onChange={(e) => setNombre(e.target.value)} 
            />
          </div>

          <div>
            <label>Correo Electrónico:</label>
            <input 
              type="email" 
              required 
              style={{ width: '100%', padding: '8px', marginTop: '4px' }} 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          <div>
            <label>Rol asignado:</label>
            <select 
              value={rol} 
              onChange={(e) => setRol(e.target.value)}
              style={{ width: '100%', padding: '8px', marginTop: '4px' }}
            >
              <option value="Solicitante">Solicitante</option>
              <option value="Aprobador">Aprobador</option>
              <option value="Finanzas">Finanzas</option>
            </select>
          </div>

          <div>
            <label>Contraseña:</label>
            <input 
              type="password" 
              required 
              style={{ width: '100%', padding: '8px', marginTop: '4px' }} 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            {/* Medidor de seguridad de contraseña */}
            <PasswordMeter password={password} />
          </div>

          <button type="submit" style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}>
            Guardar Usuario
          </button>
        </form>
      </div>

      {/* Tabla de Usuarios */}
      <h3>Listado de Usuarios Registrados</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
        <thead>
          <tr style={{ background: '#1e3a8a', color: 'white', textAlign: 'left' }}>
            <th style={{ padding: '8px' }}>Nombre</th>
            <th style={{ padding: '8px' }}>Correo</th>
            <th style={{ padding: '8px' }}>Rol</th>
            <th style={{ padding: '8px' }}>Estado</th>
            <th style={{ padding: '8px' }}>Acción (Eliminación Lógica)</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '8px' }}>{u.nombre}</td>
              <td style={{ padding: '8px' }}>{u.email}</td>
              <td style={{ padding: '8px' }}>{u.rol}</td>
              <td style={{ padding: '8px' }}>
                <span style={{ 
                  color: u.estado === 'Activo' ? 'green' : 'red', 
                  fontWeight: 'bold' 
                }}>
                  {u.estado}
                </span>
              </td>
              <td style={{ padding: '8px' }}>
                <button 
                  onClick={() => handleToggleEstado(u.id)}
                  style={{ 
                    backgroundColor: u.estado === 'Activo' ? '#dc2626' : '#16a34a', 
                    color: 'white', 
                    border: 'none', 
                    padding: '5px 10px', 
                    borderRadius: '4px', 
                    cursor: 'pointer' 
                  }}
                >
                  {u.estado === 'Activo' ? 'Desactivar (Dar de baja)' : 'Reactivar'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}