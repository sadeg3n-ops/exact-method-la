# README_BACKUP

## Qué es esta copia
Esta copia convierte el repo en una base estable y recuperable del proyecto **Exact Method LA**.
Sirve para:
- reconstruir la web si se pierde el ordenador o la carpeta local;
- volver a desplegar en Vercel;
- generar una copia offline para pendrive sin secretos reales;
- permitir que otra persona o un futuro Codex retome el trabajo con contexto suficiente.

## Qué contiene
- código fuente versionado;
- historial git del proyecto;
- documentación de backup, recuperación, seguridad y secretos;
- script `scripts/create-backup.sh` para exportar una copia offline limpia;
- una rama y un tag de copia estable.

## Datos rápidos del proyecto
- Ruta local esperada: `/Users/antonio/Documents/3. Webs/metodo-exacto-valuation-en`
- GitHub: https://github.com/sadeg3n-ops/exact-method-la
- Producción esperada: https://exact-method-la.vercel.app
- Proyecto Vercel: `exact-method-la`
- Stack: Next.js 16 + React + Vercel
- Comando local: `npm install && npm run dev`
- Comando de build: `npm run build`
- Comando de deploy: `npm run deploy:prod`

## Identificadores de la copia estable
- Rama de backup: `backup/copia-de-seguridad-completa-2026-04-01`
- Tag anotado: `copia-seguridad-2026-04-01`
- Fecha de la copia: `2026-04-01`

## Uso rápido recomendado
1. Trabaja normalmente en `main`.
2. No borres ni reutilices la rama/tag de backup.
3. Antes de cambios grandes, ejecuta `./scripts/create-backup.sh`.
4. Guarda los secretos fuera del repo.
5. Si hay desastre, sigue [`RECUPERACION_TOTAL.md`](./RECUPERACION_TOTAL.md).

## Release en GitHub
Si quieres dejar una release visible además de la rama/tag, puedes usar este comando desde el repo:

```bash
gh release create copia-seguridad-2026-04-01 \
  --repo sadeg3n-ops/exact-method-la \
  --title "Copia de seguridad 2026-04-01" \
  --notes "Backup estable del proyecto listo para recuperación total."
```

## Proteger la copia en GitHub
Hazlo manualmente en GitHub:
1. Entra en el repositorio.
2. Ve a `Settings` → `Rules` o `Branches`.
3. Crea una regla para `backup/copia-de-seguridad-completa-*`.
4. Activa al menos:
   - impedir borrado de la rama;
   - impedir force push;
   - requerir pull request para modificarla.
5. En `Releases` o `Tags`, no reutilices ni borres el tag `copia-seguridad-2026-04-01`.

## Variables y secretos
Resumen rápido:
- `NEXT_PUBLIC_CALENDLY_URL` (Pública, opcional): URL del Calendly del CTA. Si falta, hoy existe fallback hardcoded. Ejemplo seguro: `https://calendly.com/tuusuario/assessment-15min`.

Lee el detalle completo en [`VARIABLES_Y_SECRETOS.md`](./VARIABLES_Y_SECRETOS.md).
