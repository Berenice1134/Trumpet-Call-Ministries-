# Formulario de solicitud de ayuda

El formulario ya esta preparado para guardar solicitudes en Supabase y enviar una notificacion por webhook.

## 1. Crear tabla en Supabase

En Supabase, abre SQL Editor y ejecuta el archivo:

```sql
supabase-help-requests.sql
```

## 2. Configurar variables

Crea un archivo `.env` basado en `.env.example`:

```env
VITE_SUPABASE_URL=https://TU_PROYECTO.supabase.co
VITE_SUPABASE_ANON_KEY=TU_SUPABASE_ANON_KEY
VITE_HELP_REQUEST_WEBHOOK_URL=
```

## 3. Notificaciones

Para recibir avisos cuando alguien llena el formulario, coloca en `VITE_HELP_REQUEST_WEBHOOK_URL` una URL de:

- Make
- Zapier
- Formspree
- Supabase Edge Function

El webhook recibe:

```json
{
  "full_name": "Nombre",
  "phone": "Telefono",
  "message": "Mensaje",
  "source": "website_help_request_form",
  "language": "es",
  "status": "new",
  "created_at": "fecha"
}
```

Si Supabase no esta configurado, el formulario guarda una copia local en el navegador para pruebas.
