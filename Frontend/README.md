# Frontend README

This folder contains the Angular frontend for the Homeopath app.

## Prerequisites

- Node.js 22+ recommended
- npm

## Install dependencies

From this folder, run:

```bash
npm install
```

## Start the development server

Run:

```bash
npm start
```

This starts the Angular app on:

- http://localhost:4200

## Build for production

```bash
npm run build
```

## Project structure

- src/app - application components, routes, and feature modules
- src/assets - static assets
- src/environments - environment configuration

## Notes

If you see dependency issues, try removing the existing install artifacts and reinstalling:

```bash
rm -rf node_modules package-lock.json
npm install
```

On Windows PowerShell, use:

```powershell
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install
```
