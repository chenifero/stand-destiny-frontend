import { useState, useEffect, useRef } from "react";

// URL de tu servidor de WebSockets
const WS_URL = "wss://stand-destiny-backend.onrender.com";
const ADMIN_KEY = "Srgiothor140498";

const useWebSocket = () => {
  const [status, setStatus] = useState("conectando...");
  const ws = useRef(null);

  useEffect(() => {
    // Establecer conexión
    ws.current = new WebSocket(WS_URL);

    ws.current.onopen = () => {
      console.log("Conexión WebSocket establecida.");
    };

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.status) {
        // El servidor nos envía el estado actual
        setStatus(data.status);
      }
    };

    ws.current.onerror = (error) => {
      console.error("Error de WebSocket:", error);
      setStatus("error de conexión");
    };

    ws.current.onclose = () => {
      console.log("Conexión WebSocket cerrada.");
      setStatus("desconectado");
    };

    // Función de limpieza para cerrar la conexión al desmontar
    return () => {
      ws.current.close();
    };
  }, []);

  // Función para enviar un mensaje al servidor
  const sendStatusUpdate = (newStatus) => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      const message = {
        action: "UPDATE_STATUS",
        newStatus,
        // AÑADIMOS LA CLAVE SECRETA AQUÍ
        key: ADMIN_KEY,
      };
      ws.current.send(JSON.stringify(message));
    } else {
      console.error("WebSocket no está abierto para enviar.");
    }
  };

  return { status, sendStatusUpdate };
};

export default useWebSocket;
