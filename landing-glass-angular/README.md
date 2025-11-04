# LandingGlassAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources
✅ VAMOS ARRUMAR O SEU PROJETO (ANGULAR + TAILWIND v4)
1) Apague estes arquivos (se existirem):
tailwind.config.js
postcss.config.js


Não são mais usados na v4.

2) Instale Tailwind v4 corretamente

Rode dentro da pasta do projeto Angular:

npm install -D tailwindcss@latest

3) Crie um arquivo de entrada do Tailwind

Crie um arquivo:

src/tailwind.css


Com este conteúdo:

@import "tailwindcss";
@import "tailwindcss/preflight";

@import "../../design-system/tokens.css";
@import "../../design-system/effects.css";
@import "../../design-system/components.css";


Aqui estamos dizendo:
→ Carregar Tailwind
→ Carregar seu Design System
→ Pronto

4) Informe ao Angular para usar este arquivo

Abra angular.json
Procure por "styles": [...]

Substitua tudo por:

"styles": [
  "src/tailwind.css"
]


Salve.

5) Remova imports antigos

Abra src/styles.css e deixe ele vazio (ou apague o arquivo).

6) Rode novamente
ng serve -o

✅ Testar Tailwind funcionando:

Abra qualquer componente HTML e coloque:

<h1 class="text-5xl font-bold text-emerald-500">
  Tailwind v4 funcionando ✅
</h1>


Se ficou verde → sucesso 🚀

🎯 Agora respondendo sua dúvida anterior:

Como refatoro o Site Soft UI para Tailwind, sem refazer tudo?

Agora que Tailwind está instalado corretamente, nós vamos fazer a migração assim:

Design System (continua)	Tailwind (novo)
Glassmorphism, Soft Shadows, Tokens, Botões	Layout, espaçamento, grid, flex, tamanho

Ou seja → Tailwind controla a estrutura
E seu design system controla a estética
Isso permite que Angular + HTML Puro + Dashboard usem mesma base.
