
## NODE JS/ NPM required
## install Angular globally
    npm install -g @angular/cli
## Create new project
    ng new project_name
        Choose options
            Router usage
            CSS preprocessor
## ng serve 
    this command will launch project
## localhost:4200
    default address for Angular apps
## folders
    src/app - Components, Modules
        app.module.ts 
        app.components.ts
    assets - Images/media
    environments - build staff
    index.html - <app-root></app-root> -> Starting Point where JS code will be placed
    main.ts - bootstrapModule(AppModule) -> Starting Point which responsible to expand at the start of application
    style.css - Global styles
*.json files to configure typescript/angular and etc
package.json - main file with included dependencies
## Project build via webpack under Angular CLI
## Creating a new Component via CLI
    ng generate component Component_name 
    ng g c Component_name 
! Components, created via CLI will be imported in app.module.ts automatically
## ng build
## Creating a new module
    ng g m Module_name
## Componets usage from different module
    Component name should be registered in the module in exports array:
        exports: [Component_name]
## Components styling
    ovveride components styling with usage style from the root component
        encapsulation: ViewEncapsulation.None parameter after styling in app.component (rare usage)
        Best practice - use styling of Components themselves
## ng-content usage
