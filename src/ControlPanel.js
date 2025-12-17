// client/src/ControlPanel.js
import React from 'react';
import useWebSocket from './useWebSocket';

function ControlPanel() {
    const { status, sendStatusUpdate } = useWebSocket();

    const handleToggle = () => {
        const newStatus = status === 'libre' ? 'ocupado' : 'libre';
        sendStatusUpdate(newStatus);
    };

    const isLibre = status === 'libre';
    const buttonText = isLibre ? 'Marcar Ocupado' : 'Marcar Libre';
    const buttonStyle = {
        padding: '15px 30px',
        fontSize: '1.5em',
        cursor: 'pointer',
        backgroundColor: isLibre ? '#F44336' : '#4CAF50', // Color opuesto al estado actual
        color: 'white',
        border: 'none',
        borderRadius: '5px',
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center', color: 'white'}}>
            <h1>Panel de Control</h1>
            <p style={{ fontSize: '1.2em' }}>
                **Estado Actual:** <span style={{ fontWeight: 'bold', color: isLibre ? '#4CAF50' : '#F44336' }}>{status.toUpperCase()}</span>
            </p>
            <button 
                onClick={handleToggle} 
                style={buttonStyle}
                disabled={status === 'conectando...' || status === 'desconectado'}
            >
                {buttonText}
            </button>
            <p style={{ marginTop: '20px' }}>
                {status === 'conectando...' || status === 'desconectado' ? 'Esperando conexión con el servidor...' : null}
            </p>
        </div>
    );
}

export default ControlPanel;