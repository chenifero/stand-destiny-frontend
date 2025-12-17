// client/src/ProtectedControlPanel.js
import React, { useState } from 'react';
import ControlPanel from './ControlPanel';

// Define tu contraseña secreta aquí
const ADMIN_PASSWORD = 'Srgiothor140498'; // ¡CÁMBIALA!

function ProtectedControlPanel() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [passwordInput, setPasswordInput] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (passwordInput === ADMIN_PASSWORD) {
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Contraseña incorrecta.');
            setPasswordInput('');
        }
    };

    if (isAuthenticated) {
        return <ControlPanel />;
    }

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: '50px auto', textAlign: 'center', color: 'white' }}>
            <h2>Acceso a Panel de Control</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Introduce la contraseña"
                    style={{ padding: '10px', margin: '10px 0', width: '100%', fontSize: '1em' }}
                />
                <button 
                    type="submit"
                    style={{ padding: '10px 20px', fontSize: '1em', cursor: 'pointer', backgroundColor: '#3f51b5', color: 'white', border: 'none', borderRadius: '5px' }}
                >
                    Entrar
                </button>
            </form>
            {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        </div>
    );
}

export default ProtectedControlPanel;