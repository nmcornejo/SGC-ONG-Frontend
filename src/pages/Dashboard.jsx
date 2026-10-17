import React from 'react';

export default function Dashboard() {
  // Datos simulados de gastos por mes (SGC ONG)
  const datosGastos = [
    { mes: 'Ene', monto: 1200 },
    { mes: 'Feb', monto: 2100 },
    { mes: 'Mar', monto: 800 },
    { mes: 'Abr', monto: 1600 },
    { mes: 'May', monto: 2500 },
  ];

  const montoMaximo = 3000;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2>Dashboard Estadístico - SGC ONG</h2>
      <p style={{ color: '#666' }}>Resumen de solicitudes de avance y presupuestos ejecutados por mes.</p>

      {/* Tarjetas de Resumen */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '30px' }}>
        <div style={cardStyle}>
          <span style={cardTitleStyle}>Total Presupuesto</span>
          <h3 style={cardValueStyle}>$ 10,000 USD</h3>
        </div>
        <div style={cardStyle}>
          <span style={cardTitleStyle}>Gastos Aprobados</span>
          <h3 style={{ ...cardValueStyle, color: '#16a34a' }}>$ 8,200 USD</h3>
        </div>
        <div style={cardStyle}>
          <span style={cardTitleStyle}>Solicitudes Pendientes</span>
          <h3 style={{ ...cardValueStyle, color: '#f59e0b' }}>4 Registros</h3>
        </div>
      </div>

      {/* Requerimiento 8: Gráfico Estadístico */}
      <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <h3>Ejecución Presupuestaria Mensual</h3>
        
        {/* Contenedor del Gráfico de Barras */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', height: '220px', paddingT: '20px', borderBottom: '2px solid #ccc', marginTop: '20px' }}>
          {datosGastos.map((item, index) => {
            const alturaPorcentaje = (item.monto / montoMaximo) * 100;
            return (
              <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40px' }}>
                <span style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '5px' }}>${item.monto}</span>
                <div 
                  style={{ 
                    width: '100%', 
                    height: `${alturaPorcentaje}%`, 
                    backgroundColor: '#1e3a8a', 
                    borderRadius: '4px 4px 0 0',
                    transition: 'height 0.5s ease'
                  }} 
                  title={`$${item.monto} USD`}
                />
                <span style={{ fontSize: '12px', marginTop: '8px', color: '#555' }}>{item.mes}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: '#f9fafb',
  padding: '15px',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
};

const cardTitleStyle = {
  fontSize: '12px',
  color: '#6b7280',
  textTransform: 'uppercase',
  fontWeight: 'bold'
};

const cardValueStyle = {
  margin: '8px 0 0 0',
  fontSize: '22px',
  color: '#1e3a8a'
};