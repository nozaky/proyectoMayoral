# Proyecto de prueba para MAYORAL

### Automatización generada con webdriverio y typescript

Url de webdriverio: https://webdriver.io/es/

## Estructura del proyecto

```
mayoral
├─ .env.pre
├─ .gitignore
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ bostonElements
│  │  ├─ CartElements.element.ts
│  │  ├─ LoginElements.element.ts
│  │  ├─ PrincipalElements.element.ts
│  │  ├─ ProductElements.element.ts
│  │  └─ ProductListElements.element.ts
│  ├─ bostonPageObjects
│  │  ├─ CartPage.page.ts
│  │  ├─ LoginPage.page.ts
│  │  ├─ PrincipalPage.page.ts
│  │  ├─ ProductListPage.page.ts
│  │  └─ ProductPage.page.ts
│  ├─ data
│  │  └─ basicUser.json
│  ├─ interfaces
│  │  ├─ langInterface.interface.ts
│  │  └─ menuInterface.interface.ts
│  ├─ lang
│  │  ├─ en
│  │  │  └─ common.json
│  │  └─ es
│  │     ├─ common.json
│  │     └─ menu.json
│  └─ utils
│     ├─ AllureFunctions.ts
│     └─ GlobalFunctions.ts
├─ test
│  └─ specs
│     ├─ test01.ts
│     ├─ test02.ts
│     ├─ test03.ts
│     └─ test04.ts
├─ tsconfig.json
└─ wdio.conf.ts

```

## Pasos para la instalación y ejecución del proyecto

### instalación de node, este proyecto se ha generado usando la versión 20.17.0

https://nodejs.org/es/download

### una vez descargado e instalado node, se puede instalar el proyecto lanzando los siguientes comandos

```
npm i -> Instala todas las dependencias definidas en el fichero package.json
npx wdio run .\wdio.conf.ts -> ejecuta todos los test definidos en el proyecto
```
