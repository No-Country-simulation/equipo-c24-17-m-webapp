La estructura de tu README está bastante bien organizada. Aquí te dejo una versión revisada y con una pequeña reorganización para mejorar la claridad y fluidez:

```md
# equipo-c24-17-m-webapp

¡Bienvenido al repositorio del proyecto! Este es un proyecto full-stack que incluye un backend en .NET y un frontend en Next.js. A continuación, encontrarás las instrucciones para configurar y ejecutar el servidor y cliente.

---

## 📂 Estructura del Proyecto
```

tu-repo/
├── server/ # Backend en .NET
├── client/ # Frontend en Next.js
└── README.md # Este archivo

````

---

## 🛠️ Configuración del Servidor (.NET)

El servidor está ubicado en la carpeta `/server`. Sigue estos pasos para configurarlo y ejecutarlo por primera vez.

### **Requisitos previos**

- [.NET SDK](https://dotnet.microsoft.com/es-es/download/dotnet/8.0) instalado (versión 8.0).

### **Pasos para iniciar el servidor**

1. Navega a la carpeta del servidor:

   ```bash
   cd server
````

2. Instala las dependencias del proyecto:

   ```bash
   dotnet restore
   ```

3. Inicia el servidor:

   ```bash
   dotnet run
   ```

4. Una vez que el servidor esté en ejecución, la API estará disponible en:

   ```
   http://[::1]:5000/
   ```

   (El servidor usa IPv6)

---

## 🌐 Ruta por defecto de la API

La API estará disponible en la siguiente dirección por defecto:

```
http://[::1]:5000/api/
```

---

## 🚦 Pruebas

Para probar que el servidor está funcionando correctamente, puedes usar herramientas como [Postman](https://www.postman.com/).

---

# 📦 Configuración del Cliente (Next.js App)

### **1️⃣ Requisitos Previos**

Antes de ejecutar el cliente, asegúrate de tener instalado lo siguiente en tu sistema:

- **Node.js** (versión recomendada: 18 o superior) → [Descargar Node.js](https://nodejs.org/)
- **npm** (incluido con Node.js)
- **pnpm** (gestor de paquetes optimizado para Node.js)

Si aún no tienes **pnpm**, instálalo ejecutando:

```sh
npm install -g pnpm
```

---

### **2️⃣ Instalación del Cliente**

Ejecuta los siguientes comandos para instalar las dependencias del proyecto:

```sh
cd client  # Entrar al directorio del cliente
pnpm install  # Instalar dependencias con pnpm
```

---

### **3️⃣ Iniciar el Servidor de Desarrollo**

Para correr el cliente en modo desarrollo, usa:

```sh
pnpm dev
```

Por defecto, la aplicación estará disponible en:

🔗 **URL del Cliente (Local):** [http://localhost:3000](http://localhost:3000)

---

### **4️⃣ Variables de Entorno (Opcional)**

Si la aplicación necesita comunicarse con una API, crea un archivo **`.env.local`** en el directorio `/client` y agrega las variables necesarias. Por ejemplo:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

📌 **Recuerda:** Si el backend está en Railway, usa el dominio interno de la API en lugar de `localhost`.

---

### **5️⃣ Construcción y Despliegue**

Si deseas construir la aplicación para producción:

```sh
pnpm build
```

Esto generará una versión optimizada en `/client/.next`. Para ejecutarla:

```sh
pnpm start
```

---

✅ **Ahora tu Next.js app está configurada y lista para ejecutarse!** 🚀

---

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

¡Gracias por visitar este repositorio! Si tienes alguna pregunta, no dudes en abrir un issue o contactarme. 😊

---
