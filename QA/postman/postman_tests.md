# 📌 Pruebas de API con Postman

## ✅ Introducción

Este documento describe las pruebas realizadas en la API utilizando **Postman**.

## 🛠️ Configuración

1. Descargar e instalar [Postman](https://www.postman.com/downloads/).
2. Importar la colección de pruebas desde `/postman`.
3. Las variables y colección de pruebas están en sus respectivas carpetas de pruebas.

## 🔄 Flujo de Pruebas

Las pruebas verifican los siguientes aspectos de la API:

- **Autenticación**: Login, registro de usuario y cerrar sesión.
- **Usuarios**: Creación, actualización y eliminación de usuarios.
- **Hijos**: Creación, actualización y eliminación de hijos.
- **Estudios Medicos**: Creación, actualización y eliminación de estudios medicos.
- **Respuestas HTTP**: Verificación de códigos de respuesta HTTP.
- **Respuestas JSON**: Verificación de estructura y contenido de las respuestas JSON.

## 📄 Ejemplo de Prueba (Request & Response)

### **Petición (GET `/api/usuario`)**

```json
{
  "id": 1,
  "nombre": "Persona1",
  "correo": "string@email.com",
  "createdAt": "2025-02-25T22:13:24.562327",
  "imagen": "urlimagen"
}
```
