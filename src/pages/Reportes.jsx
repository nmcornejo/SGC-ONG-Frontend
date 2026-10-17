import React from 'react';

export default function Reportes() {
  const handleDescargarPDF = (nombreReporte) => {
    alert(
      `Simulación: Generando archivo PDF para "${nombreReporte}". En la fase de Backend esta acción descargará el archivo .pdf generado dinámicamente.`
    );
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2>Módulo de Reportes Financieros y Contables</h2>
      <p style={{ color: '#666' }}>
        Generación automática de reportes exportables en formato PDF [Req. 7].
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '15px',
          marginTop: '20px',
        }}
      >
        <div style={reportCardStyle}>
          <h3>Reporte General de Gastos</h3>
          <p style={{ fontSize: '13px', color: '#555' }}>
            Resumen consolidado de solicitudes de reembolsos y ejecuciones por
            categoría.
          </p>
          <button
            onClick={() => handleDescargarPDF('Reporte General de Gastos')}
            style={btnPdfStyle}
          >
            📄 Descargar Reporte (PDF)
          </button>
        </div>

        <div style={reportCardStyle}>
          <h3>Bitácora de Accesos</h3>
          <p style={{ fontSize: '13px', color: '#555' }}>
            Exportación del registro detallado de logins, direcciones IP y
            marcas de tiempo.
          </p>
          <button
            onClick={() => handleDescargarPDF('Bitácora de Accesos')}
            style={btnPdfStyle}
          >
            📄 Descargar Reporte (PDF)
          </button>
        </div>
      </div>
    </div>
  );
}

const reportCardStyle = {
  background: '#fff',
  padding: '15px',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
};

const btnPdfStyle = {
  backgroundColor: '#dc2626',
  color: 'white',
  border: 'none',
  padding: '8px 12px',
  borderRadius: '4px',
  cursor: 'pointer',
  marginTop: '10px',
  fontWeight: 'bold',
};
