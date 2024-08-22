# HeroesApp

## Dev

1. Clonar el proyecto
2. Ejecutar  ```npm install```
3. Levantar el backend ```npm run backend```
4. Ejecutar la app ```npm start``` o bien ```ng serve --o```

## Important anotations

1. Se modificó el arcivo angular.json para agregar la instrucción del cambio de variables de entorno de desarrollo a producción : 
``` 
"fileReplacements": [
{
"replace": "src/environments/environments.ts",
"with": "src/environments/environments.prod.ts"
}, 
```