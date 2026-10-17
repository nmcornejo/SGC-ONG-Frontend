import React, { useState } from 'react';

export default function Solicitudes() {
  const [solicitudes, setSolicitudes] = useState([
    { id: 'RMB-0001', concepto: 'Taller de capacitación regional', monto: 450, estado: 'Aprobado', fecha: '2026-10-10' },
    { id: 'RMB-0002', concepto: 'Compra de material de oficina', monto: 120, estado: 'Pendiente', fecha: '2026-10-14' },
  ]);

  const [concepto, setConcepto] = useState('');
  const [monto, setMonto] = useState('');

  const handleCrearSolicitud = (e) => {
    e.preventDefault();
    const nueva = {
      id: `RMB-000${solicitudes.length + 1}`,
      concepto,
      monto: parseFloat(monto),
      estado: 'Pendiente',
      fecha: new Date().toISOString().split('T')[0]
    };

    setSolicitudes([...solicitudes, nueva]);
    setConcepto('');
    setMonto('');
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2>Gestión de Solicitudes y Reembolsos</h2>
      <p style={{ color: '#666' }}>Creación y seguimiento de avances de efectivo con código único automático.</p>

      {/* Formulario de Solicitud */}
      <div style={{ background: '#f9fafb', padding: '15px', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '20px' }}>
        <h3>Nueva Solicitud de Avance</h3>
        <form onSubmit={handleCrearSolicitud} style={{ display: 'grid', gap: '10px' }}>
          <div>
            <label>Concepto / Detalle del Gasto:</label>
            <input 
              type="text" 
              required 
              style={{ width: '100%', padding: '8px', marginTop: '4px' }} 
              value={concepto} 
              onChange={(e) => setConcepto(e.target.value)} 
            />
          </div>

          <div>
            <label>Monto Estimado ($ USD):</label>
            <input 
              type="number" 
              required 
              min="1"
              style={{ width: '100%', padding: '8px', marginTop: '4px' }} 
              value={monto} 
              onChange={(e) => setMonto(e.target.value)} 
            />
          </div>

          <button type="submit" style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}>
            Generar Solicitud
          </button>
        </form>
      </div>

      {/* Tabla de Seguimiento */}
      <h3>Historial de Solicitudes</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
        <thead>
          <tr style={{ background: '#1e3a8a', color: 'white', textAlign: 'left' }}>
            <th style={{ padding: '8px' }}>Código</th>
            <th style={{ padding: '8px' }}>Concepto</th>
            <th style={{ padding: '8px' }}>Monto</th>
            <th style={{ padding: '8px' }}>Fecha</th>
            <th style={{ padding: '8px' }}>Estado</th>
          </tr>
        </thead>
        <tbody>
          {solicitudes.map((s) => (
            <tr key={s.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>{s.id}</td>
              <td style={{ padding: '8px' }}>{s.concepto}</td>
              <td style={{ padding: '8px' }}>${s.monto}</td>
              <td style={{ padding: '8px' }}>{s.fecha}</td>
              <td style={{ padding: '8px' }}>
                <span style={{ 
                  color: s.estado === 'Aprobado' ? 'green' : '#f59e0b', 
                  fontWeight: 'bold' 
                }}>
                  {s.estado}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}