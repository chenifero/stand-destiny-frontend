// client/src/PublicDisplay.js
import React from 'react';
import useWebSocket from './useWebSocket';
import './App.css'; 

function PublicDisplay() {
    const { status } = useWebSocket();
    const isLibre = status === 'libre';
    const text = isLibre ? 'LIBRE' : 'OCUPADO';

    const statusGlow = {
        border: isLibre 
            ? '4px solid rgba(76, 175, 80, 0.6)' 
            : '4px solid rgba(244, 67, 54, 0.6)',
        boxShadow: isLibre 
            ? '0 0 60px rgba(76, 175, 79, 1)' 
            : '0 0 60px rgba(244, 67, 54, 1)',
    };

    return (
        <div className="main-container">
            {/* 1. IMAGEN CORREGIDA AQUÍ */}
            <div className='titulo-public-display'>
                <img 
                    src="/encabezado2.png" 
                    alt="encabezado_destiny" 
                    className="logo-public-display" 
                />
            </div>

            <h1 style={{ color: 'white', marginBottom: '20px', fontWeight: '300', textShadow: '2px 2px 10px rgba(0,0,0,0.8)' }}>
                Estado del stand:
            </h1>

            <div className="glass-card" style={{ ...statusGlow, width: '85vw', maxWidth: '600px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h2>{text}</h2>
            </div>

            <p style={{ color: 'white', marginTop: '20px', fontSize: '1.2em', textShadow: '1px 1px 5px rgba(0,0,0,0.5)' }}>
                ¡ Ven corriendo 🏃‍♂️‍➡️ !
            </p>
        </div>
    );
}

export default PublicDisplay;