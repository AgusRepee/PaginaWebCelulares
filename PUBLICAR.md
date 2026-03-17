# Cómo publicar en GitHub Pages

## 1. Crear el repositorio en GitHub

1. Entra en **https://github.com/new**
2. **Repository name:** `PaginaWebCelulares` (tal cual)
3. Elige **Public**
4. **No** marques "Add a README file" (ya tienes código en tu PC)
5. Clic en **Create repository**

## 2. Subir tu proyecto desde la terminal

Abre una terminal en la carpeta del proyecto (`mobix-pages-reales` o donde esté el código) y ejecuta:

```bash
git remote add origin https://github.com/AgusRepee/PaginaWebCelulares.git
git branch -M main
git push -u origin main
```

Si te pide usuario y contraseña, usa tu usuario de GitHub y un **Personal Access Token** (no la contraseña normal). Para crear un token: GitHub → Settings → Developer settings → Personal access tokens → Generate new token.

## 3. Activar GitHub Pages

1. En tu repo **PaginaWebCelulares** en GitHub, ve a **Settings**
2. En el menú izquierdo, entra en **Pages**
3. En **Build and deployment**, en **Source** elige **GitHub Actions**

No hace falta configurar nada más: el workflow que ya está en el proyecto se encargará del build y del despliegue.

## 4. Esperar al despliegue

1. Ve a la pestaña **Actions** de tu repo
2. Verás un workflow "Deploy to GitHub Pages" en ejecución (o ya terminado)
3. Cuando termine en verde (✓), tu sitio estará en:

   **https://agusrepee.github.io/PaginaWebCelulares/**

## Resumen de comandos (si ya tienes git y un commit)

```bash
git remote add origin https://github.com/AgusRepee/PaginaWebCelulares.git
git push -u origin main
```

Luego en GitHub: **Settings → Pages → Source: GitHub Actions**.
