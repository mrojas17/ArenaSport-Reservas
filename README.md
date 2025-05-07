# ArenaSport - App de Reservas Deportivas

**ArenaSport** es una aplicación sencilla que permite a los usuarios registrarse, iniciar sesión, reservar turnos y ver sus reservas en un complejo deportivo.

## 🧾 Funcionalidades

- Registro de usuario  
- Inicio de sesión  
- Crear una reserva  
- Ver listado de reservas  

---

## 🚀 Tecnologías

- **Frontend**: React, Vite, Axios, Formik, React Router DOM  
- **Backend**: Node.js, Express, TypeORM, PostgreSQL, Nodemailer  
- **Base de datos**: PostgreSQL  

---

## 🛠️ Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/arena-sport.git
cd arena-sport
```

---

### 2. Backend

```bash
cd back
npm install
```

#### 🔧 Variables de entorno

Crea un archivo `.env` en la carpeta `back` con tus variables necesarias, por ejemplo:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=arenasport
PORT=3000
```

#### 🔁 Iniciar servidor backend

```bash
npm run dev
```

---

### 3. Frontend

```bash
cd ../front
npm install
```

#### 🚀 Iniciar servidor frontend

```bash
npm run dev
```

La app estará disponible en `http://localhost:5173`.

---

## 📝 Notas

- Asegúrate de tener la base de datos PostgreSQL corriendo.
- Puedes ajustar la configuración de conexión a la base de datos en el archivo `data-source.ts` del backend.
- El backend corre en el puerto `3000` y el frontend en `5173`.
