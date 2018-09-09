# LocalStorageEvents
Enterprise angular applications often need login. These store the Auth token in the session storage.
Problem is when trying to open links in new tab, the session storage is not accessible across tabs. Thus, when the user opens a link in the new tab, she is forced to login again.
This project gets around this problem by temporarily(fraction of a milli second) storing the auth token in the local storage. 
Criticism may be that storing auth token in local storage may not be secure. In the project's defence it is only for a very small amount of time.. and also it that it is a very small security trade off for a better user experiance.

CREDITS : https://blog.guya.net/2015/06/12/sharing-sessionstorage-between-tabs-for-secure-multi-tab-authentication/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
