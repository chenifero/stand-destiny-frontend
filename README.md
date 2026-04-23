<div align="center">

# 🖥️ Stand Destiny — Frontend

**Aplicación web para la gestión en tiempo real de un stand o punto de atención.**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![WebSocket](https://img.shields.io/badge/WebSocket-010101?style=for-the-badge&logo=socket.io&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

---

## 🧠 ¿Qué hace esta aplicación?

**Stand Destiny** es una web app en tiempo real que permite gestionar un stand o punto de servicio. Tiene dos vistas diferenciadas:

- 🌐 **Vista Pública** — Pantalla para clientes que muestra el estado actual del stand en tiempo real.
- 🔐 **Panel de Control** — Interfaz privada (solo admin) para gestionar el contenido mostrado en la pantalla pública.

La comunicación entre el panel de control y la pantalla pública ocurre de forma **instantánea mediante WebSockets**.

---

## 🗂️ Arquitectura

```
stand-destiny-frontend/
│
├── src/
│   ├── App.js                  → Rutas principales (/ y /admin)
│   ├── PublicDisplay.js        → Vista pública (pantalla del stand)
│   ├── ControlPanel.js         → Panel de control interno
│   ├── ProtectedControlPanel.js → Panel con autenticación de acceso
│   ├── useWebSocket.js         → Hook para la conexión WebSocket en tiempo real
│   └── App.css / index.css     → Estilos globales
│
└── public/                     → Archivos estáticos
```

---

## 🔀 Rutas de la Aplicación

| Ruta | Vista | Acceso |
|------|-------|--------|
| `/` | Pantalla pública del stand | 🌐 Público |
| `/admin` | Panel de control con autenticación | 🔐 Admin |
| `/*` | 404 - Ruta no encontrada | — |

---

## ⚡ Tecnologías

| Tecnología | Uso |
|---|---|
| **React** | Framework de la interfaz |
| **React Router DOM** | Navegación entre vistas |
| **WebSocket** | Comunicación en tiempo real |
| **Lucide React** | Iconografía |
| **Create React App** | Configuración base del proyecto |

---

## 🌐 Despliegue

| Servicio | Rol |
|---|---|
| **Vercel** | Hosting del frontend |
| **Render** | Servidor backend (WebSocket + API) |

---

## 📁 Repositorios del Proyecto

| Repositorio | Descripción |
|---|---|
| 📦 `stand-destiny-frontend` | Este repositorio — Interfaz de usuario |
| ⚙️ `stand-destiny-backend` | Servidor, WebSocket y lógica de negocio |

---

<div align="center">

**Frontend en producción en Vercel · Backend en Render 🚀**

</div>
