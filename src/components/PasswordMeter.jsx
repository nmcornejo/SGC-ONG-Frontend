import React from 'react';

export default function PasswordMeter({ password }) {
  // Función para medir la seguridad
  const evaluatePassword = (pass) => {
    let score = 0;
    if (!pass) return { label: '', color: '#ccc', percent: 0 };
    
    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;

    if (score <= 1) return { label: 'Débil', color: '#ef4444', percent: 33 };
    if (score === 2 || score === 3) return { label: 'Intermedio', color: '#f59e0b', percent: 66 };
    return { label: 'Fuerte', color: '#10b981', percent: 100 };
  };

  const strength = evaluatePassword(password);

  return (
    <div style={{ marginTop: '8px' }}>
      {/* Barra de progreso visual */}
      <div style={{ width: '100%', backgroundColor: '#e5e7eb', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
        <div style={{ width: `${strength.percent}%`, backgroundColor: strength.color, height: '100%', transition: 'width 0.3s' }}></div>
      </div>
      {password && (
        <span style={{ fontSize: '12px', color: '#4b5563', marginTop: '4px', display: 'block' }}>
          Seguridad de la contraseña: <strong>{strength.label}</strong>
        </span>
      )}
    </div>
  );
}