## 📦 **Configuración del Cliente (Next.js App)**

### **1️⃣ Requisitos Previos**

Antes de ejecutar el cliente, asegúrate de tener instalado lo siguiente en tu sistema:

- **Node.js** (versión recomendada: 18 o superior) → [Descargar Node.js](https://nodejs.org/)
- **npm** (incluido con Node.js)
- **pnpm** (gestor de paquetes optimizado para Node.js)

Si aún no tienes `pnpm`, instálalo ejecutando:

```bash
npm install -g pnpm
```

### **2️⃣ Instalación del Cliente**

Ejecuta los siguientes comandos para instalar las dependencias del proyecto:

```bash
pnpm install  # Instalar dependencias con pnpm
```

### **3️⃣ Iniciar el Servidor de Desarrollo**

Para correr el cliente en modo desarrollo, usa:

```bash
pnpm dev
```

Por defecto, la aplicación estará disponible en:  
🔗 **URL del Cliente (Local):** `http://localhost:3000`

📌 **Recuerda:** Si el backend está en Railway, usa el **dominio interno** de la API en lugar de `localhost`.

### **5️⃣ Construcción y Despliegue**

Si deseas construir la aplicación para producción:

```bash
pnpm build
```

Esto generará una versión optimizada en `/client/.next`. Para ejecutarla:

```bash
pnpm start
```
